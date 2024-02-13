import {useMemo, useState} from 'react';
import RadioButtonsGroup from 'react-native-radio-buttons-group';

const RadioButton = () => {
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Option 1',
        value: 'option1',
      },
      {
        id: '2',
        label: 'Option 2',
        value: 'option2',
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState<string | undefined>();

  return (
    <RadioButtonsGroup
      radioButtons={radioButtons}
      onPress={setSelectedId}
      selectedId={selectedId}
    />
  );
};

export default RadioButton;
