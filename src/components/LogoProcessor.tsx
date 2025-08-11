import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

interface LogoProcessorProps {
  originalLogoUrl: string;
  onProcessed: (processedUrl: string) => void;
  className?: string;
  alt: string;
}

const LogoProcessor = ({ originalLogoUrl, onProcessed, className, alt }: LogoProcessorProps) => {
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      setIsProcessing(true);
      setError(null);
      
      try {
        // Load the original image
        const image = await loadImageFromUrl(originalLogoUrl);
        
        // Remove background
        const processedBlob = await removeBackground(image);
        
        // Create URL for processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedUrl(url);
        onProcessed(url);
        
      } catch (err) {
        console.error('Failed to process logo:', err);
        setError('Failed to process logo');
        // Fallback to original image
        onProcessed(originalLogoUrl);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [originalLogoUrl, onProcessed]);

  // Cleanup URLs when component unmounts
  useEffect(() => {
    return () => {
      if (processedUrl) {
        URL.revokeObjectURL(processedUrl);
      }
    };
  }, [processedUrl]);

  if (isProcessing) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <img 
        src={originalLogoUrl} 
        alt={alt}
        className={className}
      />
    );
  }

  return (
    <img 
      src={processedUrl || originalLogoUrl} 
      alt={alt}
      className={className}
    />
  );
};

export default LogoProcessor;