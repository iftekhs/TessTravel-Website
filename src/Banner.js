import React from 'react';
import video from './videotravel.mp4';
function Banner() {
  return (
    <div className="banner">
      <video
        className="video"
        autoPlay
        loop
        muted
        style={{
          position: 'relative',
          width: '100%',
        }}>
        <source
          src={video}
          className="video"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Banner;
