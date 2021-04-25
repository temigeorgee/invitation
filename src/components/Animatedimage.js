import React from 'react';
import Lottie from 'react-lottie';
import * as rings from '../rings.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: rings.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function Animatedimage() {
  return (
    <div>
      <Lottie options={defaultOptions} height={50} width={50} />
    </div>
  );
}

export default Animatedimage;
