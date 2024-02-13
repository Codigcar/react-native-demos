import {useState} from 'react';
import {useForm} from 'react-hook-form';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import View from '../components/box/View';
import FormInput from '../components/form/FormInput';
import RadioButton from '../components/radio/RadioButton';
import Button from '../components/button';

const schema = Yup.object()
  .shape({
    user: Yup.string().required(),
    password: Yup.string().required(),
    isRememberUser: Yup.bool().required(),
  })
  .required();

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    setValue,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      user: '',
      password: '',
      isRememberUser: false,
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = (data: any) => console.log(data);

  return (
    <View backgroundColor="white" paddingHorizontal="1">
      <View height={50} />
      <FormInput
        control={control}
        name="user"
        placeholder="Usuario"
        errors={errors}
      />
      <View height={50} />
      <FormInput
        control={control}
        name="password"
        placeholder="Clave de acceso"
        errors={errors}
      />
      <RadioButton
        checked={isChecked}
        onPress={() => {
          setIsChecked(prev => !prev);
          setValue('isRememberUser', !isChecked);
        }}
      />
      <View height={50} />

      <Button
        // disabled={!isValid}
        type="primary"
        title="Continuar"
        // onPress={handleSubmit(onSubmit)}
        onPress={() => {
          console.log('hoaaa');
          Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋',
          });
        }}
      />
    </View>
  );
};
export default LoginScreen;
