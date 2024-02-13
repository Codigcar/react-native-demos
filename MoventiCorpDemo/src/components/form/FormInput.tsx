import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import CustomInput from '../input/Input';
import {TextInput} from 'react-native';
import Paragraph from '../typhografic/Paragraph';

type IFormInput = {
  //   control: Control<FieldValues> | undefined;
  control: any;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, 'firstName'>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
  name: string;
  errors: any;
  placeholder: string;
};

const FormInput = ({control, rules, name, errors, placeholder}: IFormInput) => {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      {errors[name] && <Paragraph color="primary">{errors[name].message}</Paragraph>}
    </>
  );
};

export default FormInput;
