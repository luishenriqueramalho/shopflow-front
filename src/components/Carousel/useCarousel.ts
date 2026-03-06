import { useCallback, useRef, useState } from 'react';
import type {
  FlatList,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import type { CarouselItem } from './types';

export const useCarousel = () => {
  const flatListRef = useRef<FlatList<CarouselItem>>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  }, []);

  const handleMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (containerWidth <= 0) {
        return;
      }

      const offsetX = event.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(offsetX / containerWidth);

      setActiveIndex(currentIndex);
    },
    [containerWidth],
  );

  const keyExtractor = useCallback((item: CarouselItem) => item.id, []);

  return {
    flatListRef,
    activeIndex,
    containerWidth,
    handleLayout,
    handleMomentumScrollEnd,
    keyExtractor,
  };
};
