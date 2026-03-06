import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export const CartIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect opacity="0.01" width="24" height="24" fill="white" />
      <G clip-path="url(#clip0_2_5422)">
        <G clip-path="url(#clip1_2_5422)">
          <Path
            d="M18.9692 2L22.1274 5.7627V20.7998C22.1274 21.36 21.582 22 20.6664 22H3.43695C2.52161 21.9998 1.97601 21.3599 1.97601 20.7998V5.7627L5.13422 2H18.9692Z"
            stroke="#004CFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M2.57098 5.40039H21.6366"
            stroke="#004CFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M16.3665 9.7998C16.3665 12.2299 14.4347 14.1998 12.0517 14.1998C9.66877 14.1998 7.737 12.2299 7.737 9.7998"
            stroke="#004CFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_2_5422">
          <Rect
            width="22.1519"
            height="21.9999"
            fill="white"
            transform="translate(0.976013 1)"
          />
        </ClipPath>
        <ClipPath id="clip1_2_5422">
          <Rect
            width="22.1519"
            height="21.9999"
            fill="white"
            transform="translate(0.976013 1)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
