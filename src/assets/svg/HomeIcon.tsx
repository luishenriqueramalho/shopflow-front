import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export const HomeIcon = () => {
  return (
    <Svg width="24" height="33" viewBox="0 0 24 33" fill="none">
      <Rect opacity="0.01" width="24" height="24" fill="white" />
      <G clip-path="url(#clip0_2_5446)">
        <G clip-path="url(#clip1_2_5446)">
          <Path
            d="M21.9073 9.23047V20.7021C21.9073 21.2616 21.3724 21.8818 20.4961 21.8818H3.62015C2.74387 21.8818 2.20902 21.2616 2.20901 20.7021V9.23047L12.0576 2.30371L21.9073 9.23047Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8.85703 20.925V10.917H15.2588V20.925"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
      </G>
      <Path
        d="M7.5 31H16.5"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
      />
      <Defs>
        <ClipPath id="clip0_2_5446">
          <Rect
            width="21.6982"
            height="21.8012"
            fill="white"
            transform="translate(1.20901 1.08105)"
          />
        </ClipPath>
        <ClipPath id="clip1_2_5446">
          <Rect
            width="21.6982"
            height="21.8012"
            fill="white"
            transform="translate(1.20901 1.08105)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
