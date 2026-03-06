import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export const ProfileIcon = () => {
  return (
    <Svg width="22" height="24" viewBox="0 0 22 24" fill="none">
      <Path
        d="M10.6729 1C12.7013 1 14.3457 2.64439 14.3457 4.67285C14.3457 6.70132 12.7013 8.3457 10.6729 8.3457C8.64439 8.34569 7 6.70131 7 4.67285C7.00001 2.6444 8.6444 1.00001 10.6729 1Z"
        stroke="#004CFF"
        stroke-width="2"
      />
      <G clip-path="url(#clip0_2_5449)">
        <Path
          d="M20.921 23.0643V18.6733C20.879 17.3937 20.331 16.183 19.3974 15.307C18.4637 14.4309 17.2207 13.961 15.941 14.0003H5.98C4.7003 13.961 3.45725 14.4309 2.52362 15.307C1.58999 16.183 1.04204 17.3937 1 18.6733V23.0643"
          stroke="#004CFF"
          stroke-width="2"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2_5449">
          <Rect
            width="21.921"
            height="10.064"
            fill="white"
            transform="translate(0 13)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
