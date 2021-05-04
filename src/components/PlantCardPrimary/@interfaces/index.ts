import { RectButtonProps } from 'react-native-gesture-handler';

export interface IPlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}
