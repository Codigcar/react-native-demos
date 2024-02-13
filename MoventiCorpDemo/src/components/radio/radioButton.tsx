import {useMemo, useState} from 'react';
import RadioButtonsGroup from 'react-native-radio-buttons-group';
import View from '../box/View';
import Paragraph from '../typhografic/Paragraph';
import {TouchableOpacity} from 'react-native';

type Props = {
  checked: boolean;
  onPress: () => void;
};

const RadioButton = ({checked, onPress}: Props) => {
  // const radioButtons = useMemo(
  //   () => [
  //     {
  //       id: '1', // acts as primary key, should be unique and non-empty string
  //       label: 'Option 1',
  //       value: 'option1',
  //     },
  //   ],
  //   [],
  // );

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [radioButtons, setRadioButtons] = useState([
    {id: '1', label: 'Opción 1', value: 'opcion1', selected: false},
    // {id: '2', label: 'Opción 2', value: 'opcion2', selected: false},
    // {id: '3', label: 'Opción 3', value: 'opcion3', selected: false},
  ]);

  // const handleRadioButtonPress = (radioButton: any) => {
  //   const updatedRadioButtons = radioButtons.map(item => {
  //     if (item.id === radioButton.id) {
  //       return {...item, selected: !item.selected};
  //     } else {
  //       return {...item, selected: false};
  //     }
  //   });

  //   setRadioButtons(updatedRadioButtons);
  // };

  return (
    // <RadioButton
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

    // <RadioButtonsGroup
    //   radioButtons={radioButtons}
    //   onPress={(data) => {
    //     console.log("🚀 --------------------------------------------------------🚀")
    //     console.log("🚀 ~ file: radioButton.tsx:40 ~ RadioButton ~ data:", data)
    //     console.log("🚀 --------------------------------------------------------🚀")
    //     setSelectedId(data)
    //   }}
    //   selectedId={selectedId}
    // />
  );
};

export default RadioButton;
