import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface IButtonProps extends TouchableOpacityProps {
  children: string | ReactNode;
}