import { useState, useEffect } from "react";
import Lottie from "lottie-react";

const Preloader = ({ isLoading }: { isLoading: boolean }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/D_Mascot_Animation_Request.json')
      .then(response => response.json())
      .then(data => {
        setAnimationData(data);
      })
      .catch(error => {
        console.error('Error loading animation:', error);
      });
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 transition-opacity duration-500 ease-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="w-64 h-64 md:w-80 md:h-80">
          {animationData ? (
            <Lottie animationData={animationData} loop={true} />
          ) : (
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          )}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            MANCOSA Student Companion
          </h2>
          <p className="text-gray-600 animate-pulse">
            Loading your experience...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
