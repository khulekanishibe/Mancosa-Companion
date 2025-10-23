import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface PreloaderAnimationProps {
  onComplete?: () => void;
}

export const PreloaderAnimation = ({ onComplete }: PreloaderAnimationProps) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    fetch('/D_Mascot_Animation_Request.json')
      .then(response => response.json())
      .then(data => {
        setAnimationData(data);
      })
      .catch(error => {
        console.error('Error loading animation:', error);
        handleAnimationComplete();
      });
  }, []);

  const handleAnimationComplete = () => {
    setIsFadingOut(true);

    setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleAnimationComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        {animationData ? (
          <div className="w-64 h-64 md:w-80 md:h-80">
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
            />
          </div>
        ) : (
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        )}

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            MANCOSA Student Companion
          </h2>
          <p className="text-gray-600 animate-pulse">Loading your experience...</p>
        </div>
      </div>
    </div>
  );
};
