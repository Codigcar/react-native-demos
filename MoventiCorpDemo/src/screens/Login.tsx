import {useForm} from 'react-hook-form';
import View from '../components/box/View';
import FormInput from '../components/form/FormInput';
import Paragraph from '../components/typhografic/Paragraph';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import RadioButton from '../components/radio/radioButton';
import Button from '../components/button';
import {useState} from 'react';

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
        disabled={!isValid}
        type="primary"
        title="Continuar"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};
export default LoginScreen;
