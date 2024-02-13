import {TouchableWithoutFeedback} from 'react-native';

import View from '../box/View';
import Paragraph from '../typhografic/Paragraph';
import type {AllProps} from '../../theme';
import {styles} from './styles';

type IButtonProps = {
  title: string;
  disabled?: boolean;
  icon?: React.ComponentType;
  type?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'default' | 'large';
  onPress: () => void;
};

const Button: React.FC<IButtonProps> = ({
  title,
  disabled,
  icon,
  //   onPress,
  type = 'default',
  size = 'default',
  ...rest
}) => {
  const buttonStyles = Object.assign(
    {},
    styles.button.type[type],
    styles.button.size[size],
  );
  // const iconStyles = [{fontSize: 24, marginRight: 6, ...icon?.props.style}];
  const textStyles: any = Object.assign(
    {},
    styles.text.type[type],
    styles.text.size[size],
  );

  return (
    <TouchableWithoutFeedback disabled={disabled} {...rest}>
      <View
        alignItems="center"
        borderRadius="sm"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="center"
        opacity={disabled ? 0.7 : 1}
        width="100%"
        {...buttonStyles}>
        <Paragraph fontWeight="bold" {...textStyles}>
          {title}
        </Paragraph>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
