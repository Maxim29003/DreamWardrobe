import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@routes/navigations.types';

const useAppNavigation = <SCREEN extends keyof RootStackParamList>() => {
  return useNavigation<NavigationProp<RootStackParamList, SCREEN>>();
};

export default useAppNavigation;
