import React, { useState, useEffect } from 'react';

const RedirectTimer = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Only start if countdown is > 0
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(timer);
    } else {
      // Redirect when countdown reaches 0
      window.location.href = 'https://www.figma.com/proto/2iK5aqtj1nUFcJt7rPE4nf/Untitled?node-id=1-45&p=f&t=nSRJsd47uZELtMlk-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A45';
    }
  }, [countdown]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="p-8 bg-white rounded-lg shadow-md flex  ">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">                       
          Redirecting to Tara...
        </h1>
        <p className="text-xl text-gray-600">
          You will be redirected in {countdown} seconds
        </p>
      </div>
    </div>
  );
};

export default RedirectTimer;


// 8980797080 --> sanna 
// 9909424245 --> diviang 