import { RectButtonProps } from 'react-native-gesture-handler';

export interface IEnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}
