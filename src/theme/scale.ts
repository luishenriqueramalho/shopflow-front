import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const isTablet = Math.min(width, height) >= 768;

export function scale(size: number, minSize?: number): number {
  const baseWidth = 375;
  const newSize = Math.min(
    size,
    Math.max(size * (width / baseWidth) * (isTablet ? 1.2 : 1), minSize || 0),
  );
  return Math.floor(newSize);
}

export function isDeviceTablet(): boolean {
  return isTablet;
}
