/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import theme from './src/theme';
import View from './src/components/box/View';
// import CustomInput from './src/components/input/Input';

import {Text as RNText, TextInput, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import * as Yup from 'yup';

import FormInput from './src/components/form/FormInput';
import Paragraph from './src/components/typhografic/Paragraph';
import Text from './src/components/typhografic/Text';
import {yupResolver} from '@hookform/resolvers/yup';
import Button from './src/components/button';
import RadioButton from './src/components/radio/radioButton';

const schema = Yup.object()
  .shape({
    user: Yup.string().required(),
    password: Yup.string().required(),
  })
  .required();

const App = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      user: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <ThemeProvider theme={theme}>
      {
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
          <RadioButton />
          <View height={50} />

          <Button type="primary" title="Continuar" onPress={handleSubmit(onSubmit)} />
        </View>
      }
    </ThemeProvider>
  );
};

export default App;
