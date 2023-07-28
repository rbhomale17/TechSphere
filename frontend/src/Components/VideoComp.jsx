import React, { useRef, useEffect } from 'react';

export const VideoComp = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      const setupMediaStream = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (error) {
          console.error('Error accessing user media:', error);
        }
      };
  
      setupMediaStream();
  
      // Clean up the media stream when the component unmounts
      return () => {
        const stream = videoRef.current?.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      };
    }, []);
  
    return <video id="userVideo" ref={videoRef} autoPlay playsInline />;
}
