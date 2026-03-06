import {
  NavigationProp,
  ParamListBase,
  useNavigation
} from '@react-navigation/native';
import { useEffect, useRef } from 'react';

export const useInitialTransition = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      navigation.navigate('Home');
    }, 7000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [navigation]);

  return {};
}
