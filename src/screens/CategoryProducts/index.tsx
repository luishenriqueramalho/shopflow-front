import React, { useCallback, useMemo } from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { SafeArea } from '@/components/SafeArea/SafeArea';
import { Scroll, Wrapper } from '@/theme/global';
import {
  BackButtonRow,
  Container,
  EmptyText,
  HeaderSubtitle,
  HeaderTitle,
} from './styles';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from '@/assets/svg';

type RouteParams = {
  categoryId: string;
  categoryName: string;
};

const CategoryProducts = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute();
  const { categoryId, categoryName } = route.params as RouteParams;

  const title = useMemo(() => categoryName, [categoryName]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeArea edges={['top', 'bottom']}>
      <Scroll>
        <Wrapper>
          <Container>
            <BackButtonRow>
              <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
                <ArrowLeftIcon />
              </TouchableOpacity>
            </BackButtonRow>

            <HeaderTitle>{title}</HeaderTitle>
            <HeaderSubtitle>ID da categoria: {categoryId}</HeaderSubtitle>

            <EmptyText>
              Aqui será exibida a lista de produtos da categoria selecionada.
            </EmptyText>
          </Container>
        </Wrapper>
      </Scroll>
    </SafeArea>
  );
};

export default CategoryProducts;
