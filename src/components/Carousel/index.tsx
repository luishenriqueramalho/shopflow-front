import React, { useCallback, useRef, useState } from 'react';
import {
  FlatList,
  LayoutChangeEvent,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {
  Card,
  Container,
  Content,
  Description,
  Dot,
  DotsContainer,
  ImageBackgroundStyled,
  Overlay,
  Subtitle,
  Title,
} from './styles';

type CarouselItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: { uri: string } | number;
};

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: '1',
    title: 'Grande Oferta',
    subtitle: 'Até 50% off',
    description: 'Acontecendo\nAgora',
    image: {
      uri: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: '2',
    title: 'Nova Coleção',
    subtitle: 'Primavera 2026',
    description: 'Novos\nLooks',
    image: {
      uri: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: '3',
    title: 'Ofertas Exclusivas',
    subtitle: 'Por Tempo Limitado',
    description: 'Só\nHoje',
    image: {
      uri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: '4',
    title: 'Melhores Preços',
    subtitle: 'Economize Mais',
    description: 'Compre\nMelhor',
    image: {
      uri: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
    },
  },
];

const Carousel = () => {
  const flatListRef = useRef<FlatList<CarouselItem>>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  }, []);

  const handleMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (!containerWidth) {
        return;
      }

      const offsetX = event.nativeEvent.contentOffset.x;
      const currentIndex = Math.round(offsetX / containerWidth);

      setActiveIndex(currentIndex);
    },
    [containerWidth],
  );

  const keyExtractor = useCallback((item: CarouselItem) => item.id, []);

  const renderItem: ListRenderItem<CarouselItem> = useCallback(
    ({ item }) => (
      <Card activeOpacity={0.95} style={{ width: containerWidth }}>
        <ImageBackgroundStyled source={item.image} resizeMode="cover">
          <Overlay />
          <Content>
            <>
              <Title numberOfLines={2}>{item.title}</Title>
              <Subtitle numberOfLines={1}>{item.subtitle}</Subtitle>
            </>
            <Description>{item.description}</Description>
          </Content>
        </ImageBackgroundStyled>
      </Card>
    ),
    [containerWidth],
  );

  return (
    <Container onLayout={handleLayout}>
      {containerWidth > 0 && (
        <FlatList
          ref={flatListRef}
          data={CAROUSEL_ITEMS}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          decelerationRate="fast"
          onMomentumScrollEnd={handleMomentumScrollEnd}
          initialNumToRender={1}
          maxToRenderPerBatch={2}
          windowSize={3}
          removeClippedSubviews
          getItemLayout={(_, index) => ({
            length: containerWidth,
            offset: containerWidth * index,
            index,
          })}
        />
      )}

      <DotsContainer>
        {CAROUSEL_ITEMS.map((item, index) => (
          <Dot key={item.id} isActive={index === activeIndex} />
        ))}
      </DotsContainer>
    </Container>
  );
};

export default Carousel;
