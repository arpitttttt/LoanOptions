import React from 'react';
import award3 from '../assets/award3.png'

const AwardAnimation = () => {
  return (
    <>
      <style>{`
        body {
          background: #fdf6e3;
          overflow-x: hidden;
        }

        .animation-wrapper {
          position: relative;
          width: 100%;
          height: 120px;
          overflow: hidden;
          white-space: nowrap;
        }

        .badge-track {
          display: inline-block;
          white-space: nowrap;
          animation: scrollLeft 18s linear infinite;
        }

        .badge {
          display: inline-block;
          margin-right: 0px;
          width: 80px;
          height: 80px;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      <div className="animation-wrapper">
        <div className="badge-track">
          {[...Array(8)].map((_, idx) => (
            <img
              key={idx}
              src={award3}
              className="badge"
              alt="Award Badge"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AwardAnimation;
