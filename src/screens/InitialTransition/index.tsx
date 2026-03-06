import React from 'react';
import { Header, Loader, LogoImage, SubTitle, Title } from './styles';
import { Logo } from '@/assets/images';
import { useInitialTransition } from './useInitialTransition';

const InitialTransition = () => {
  useInitialTransition();

  return (
    <>
      <Header>
      <LogoImage source={Logo} resizeMode="contain" />

        <Title>SHOPFLOW</Title>
        <SubTitle>Sua loja online</SubTitle>

      <Loader size="large" />
      </Header>
    </>
  )
}

export default InitialTransition;
