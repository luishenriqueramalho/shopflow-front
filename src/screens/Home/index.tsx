import { SafeArea } from '@/components/SafeArea/SafeArea';
import { Scroll, Wrapper } from '@/theme/global';
import React from 'react';
import {
  CameraVw,
  Header,
  NameApp,
  NameAppTxt,
  Search,
  SearchInput,
} from './styles';
import { Camera } from '@/assets/svg';
import Carousel from '@/components/Carousel';
import Categories from '@/components/Categories';
import AllItems from '@/components/AllItems';
import Menu from '@/components/Menu';
import { useHome } from './useHome';
import { Text } from 'react-native';

const Home = () => {
  const controller = useHome();

  return (
    <>
      <SafeArea edges={['top', 'bottom']}>
        <Scroll>
          <Wrapper>
            <Header>
              <NameApp>
                <NameAppTxt>SHOP</NameAppTxt>
              </NameApp>

              <Search>
                <SearchInput placeholder="Buscar" />
                <CameraVw>
                  <Camera />
                </CameraVw>
              </Search>
            </Header>

            {controller.loadingProducts ? (
              <Text>Carregando produtos...</Text>
            ) : controller.errorProducts ? (
              <>
                <Text>{controller.errorProducts}</Text>
                <Text onPress={controller.handleRetryFetchProducts}>
                  Tentar novamente
                </Text>
              </>
            ) : (
              <>
                <Carousel items={controller.carouselItems} />
                <Categories items={controller.categories} />
                <AllItems products={controller.products} />
              </>
            )}
          </Wrapper>
        </Scroll>

        <Menu />
      </SafeArea>
    </>
  );
};

export default Home;
