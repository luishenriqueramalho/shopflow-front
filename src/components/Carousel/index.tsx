import React, { useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
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
import { CarouselItem } from './types';
import { useCarousel } from './useCarousel';

type CarouselProps = {
  items: CarouselItem[];
};

const Carousel = ({ items }: CarouselProps) => {
  const controller = useCarousel();

  const renderItem: ListRenderItem<CarouselItem> = useCallback(
    ({ item }) => (
      <Card activeOpacity={0.95} style={{ width: controller.containerWidth }}>
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
    [controller.containerWidth],
  );

  return (
    <Container onLayout={controller.handleLayout}>
      {controller.containerWidth > 0 && (
        <FlatList
          ref={controller.flatListRef}
          data={items}
          keyExtractor={controller.keyExtractor}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          decelerationRate="fast"
          onMomentumScrollEnd={controller.handleMomentumScrollEnd}
          initialNumToRender={1}
          maxToRenderPerBatch={2}
          windowSize={3}
          removeClippedSubviews
          getItemLayout={(_, index) => ({
            length: controller.containerWidth,
            offset: controller.containerWidth * index,
            index,
          })}
        />
      )}

      <DotsContainer>
        {items.map((item, index) => (
          <Dot key={item.id} isActive={index === controller.activeIndex} />
        ))}
      </DotsContainer>
    </Container>
  );
};

export default Carousel;
