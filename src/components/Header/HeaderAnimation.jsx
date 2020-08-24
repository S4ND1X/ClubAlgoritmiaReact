import React from "react";
import styled from "styled-components";

export default function HeaderAnimation() {
  return (
    <HeaderAnimationStyled>
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div
            className="wave waveTop"
            style={{
              backgroundImage:
                "url('https://front-end-noobs.com/jecko/img/wave-top.png')",
            }}
          ></div>
        </div>
        {/* Top Wave animation */}
        <div className="waveWrapperInner bgMiddle">
          <div
            className="wave waveMiddle"
            style={{
              backgroundImage:
                "url('https://front-end-noobs.com/jecko/img/wave-mid.png')",
            }}
          ></div>
        </div>
        {/* Middle Wave animation */}
        <div className="waveWrapperInner bgBottom">
          <div
            className="wave waveBottom"
            style={{
              backgroundImage:
                "url('https://front-end-noobs.com/jecko/img/wave-bot.png')",
            }}
          ></div>
        </div>
        {/* Bottom Wave animation */}
      </div>
    </HeaderAnimationStyled>
  );
}

//Styles
const HeaderAnimationStyled = styled.div`
  .waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
  }
  .waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    background-image: linear-gradient(
      -45deg,
      var(--header-blue),
      var(--header-turquoise)
    );
  }
  .bgTop {
    z-index: -1;
    opacity: 0.5;
  }
  .bgMiddle {
    z-index: -2;
    opacity: 0.75;
  }
  .bgBottom {
    z-index: -3;
  }
  .wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
  }
  .waveTop {
    background-size: 50% 100px;
  }
  .waveAnimation .waveTop {
    animation: move-wave 3s;
    -webkit-animation: move-wave 3s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }
  .waveMiddle {
    background-size: 50% 120px;
  }
  .waveAnimation .waveMiddle {
    animation: move_wave 10s linear infinite;
  }
  .waveBottom {
    background-size: 50% 100px;
  }
  .waveAnimation .waveBottom {
    animation: move_wave 15s linear infinite;
  }
  @keyframes move_wave {
    0% {
      transform: translateX(0) translateZ(0) scaleY(1);
    }
    50% {
      transform: translateX(-25%) translateZ(0) scaleY(0.55);
    }
    100% {
      transform: translateX(-50%) translateZ(0) scaleY(1);
    }
  }
`;
