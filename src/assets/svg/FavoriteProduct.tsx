import React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

type Props = {
  favorite?: boolean;
};

export const FavoriteProduct: React.FC<Props> = ({ favorite = false }) => {
  const fillColor = favorite ? 'url(#favoriteGradient)' : '#FFFFFF';

  return (
    <Svg width={26} height={24} viewBox="0 0 26 24" fill="none">
      <Path
        d="M13 24C6.00998 19.208 2.344 14.8485 0.840522 11.2C-3.1872 1.42222 8.31719 -3.2538 13 2.51822C17.6828 -3.2538 29.1872 1.42222 25.1595 11.2C23.656 14.8485 19.99 19.208 13 24Z"
        fill={fillColor}
      />

      {favorite && (
        <Defs>
          <LinearGradient
            id="favoriteGradient"
            x1="26"
            y1="0"
            x2="0"
            y2="0"
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#FF5790" />
            <Stop offset="1" stopColor="#F81140" />
          </LinearGradient>
        </Defs>
      )}
    </Svg>
  );
};
