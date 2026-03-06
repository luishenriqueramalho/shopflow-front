import React, { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeIcon, FavoriteIcon, CartIcon } from '@/assets/svg';
import {
  Container,
  MenuButton,
  MenuContent,
  MenuIndicator,
  MenuLabel,
} from './styles';

type MenuRouteName = 'Home' | 'Favorites' | 'Cart' | 'Profile';

type MenuItem = {
  key: MenuRouteName;
  label: string;
  icon: React.ReactNode;
};

const MENU_ITEMS: MenuItem[] = [
  {
    key: 'Home',
    label: 'Início',
    icon: <HomeIcon />,
  },
  {
    key: 'Favorites',
    label: 'Favoritos',
    icon: <FavoriteIcon />,
  },
  {
    key: 'Cart',
    label: 'Carrinho',
    icon: <CartIcon />,
  },
];

const Menu = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const activeRouteName = useMemo(
    () => route.name as MenuRouteName,
    [route.name],
  );

  const handleNavigate = useCallback(
    (routeName: MenuRouteName) => {
      if (activeRouteName === routeName) {
        return;
      }

      navigation.navigate(routeName as never);
    },
    [activeRouteName, navigation],
  );

  return (
    <Container>
      {MENU_ITEMS.map(item => {
        const isActive = item.key === activeRouteName;

        return (
          <MenuButton
            key={item.key}
            activeOpacity={0.8}
            onPress={() => handleNavigate(item.key)}>
            <MenuContent>
              {item.icon}
              <MenuLabel isActive={isActive}>{item.label}</MenuLabel>
              <MenuIndicator isActive={isActive} />
            </MenuContent>
          </MenuButton>
        );
      })}
    </Container>
  );
};

export default Menu;
