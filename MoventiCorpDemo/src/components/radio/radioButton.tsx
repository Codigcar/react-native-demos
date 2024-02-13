import View from '../box/View';
import Paragraph from '../typhografic/Paragraph';
import {TouchableOpacity} from 'react-native';

type Props = {
  checked: boolean;
  onPress: () => void;
};

const RadioButton = ({checked, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View flexDirection="row" alignItems="center">
        <View
          width={16}
          height={16}
          borderWidth={2}
          borderColor="coolGray-300"
          borderRadius="full"
          justifyContent="center"
          alignItems="center"
          mr="0.5">
          {checked ? (
            <View
              width={8}
              height={8}
              borderRadius="full"
              backgroundColor="primary"
            />
          ) : null}
        </View>
        <Paragraph>Recordar usuario</Paragraph>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
