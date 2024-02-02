import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveForever = keyframes`
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  text-align: center;
  background: linear-gradient(60deg, rgb(16 3 65) 0%, rgb(180 54 255) 100%);
  color: white;
`;

const InnerHeader = styled.div`
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;


const WavesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;
`;

const Waves = styled.svg`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ParallaxUse = styled.use`
  animation: ${moveForever} 4s cubic-bezier(.55,.5,.45,.5) infinite;
`;

const Content = styled.div`
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
`;

const SimpleWavesHeader = () => {
  return (
    <HeaderContainer>
      <InnerHeader>
      </InnerHeader>
      <WavesContainer>
        <Waves xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <ParallaxUse xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <ParallaxUse xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <ParallaxUse xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <ParallaxUse xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </Waves>
      </WavesContainer>
    </HeaderContainer>
  );
};

export default SimpleWavesHeader;
