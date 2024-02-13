import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfigParams,
} from 'react-native-toast-message';
import View from '../box/View';
import Paragraph from '../typhografic/Paragraph';

const toastConfig = {
  success: (props: any) => (
    <View
      borderColor="success"
      borderWidth={1}
      flex={1}
      height={56}
      width="90%"
      borderRadius="md"
      flexDirection="row">
      <View paddingHorizontal="0.5">
        <View height={20} width={20} />
      </View>
      <View flex={1}>
        <Paragraph>Correo de confirmación enviado</Paragraph>
        <Paragraph>
          Hemos enviado el recibo a su correo ****
          asdasdasdasdasdasdasdasdasdasd
        </Paragraph>
      </View>
      <View paddingHorizontal="0.5">
        <View height={20} width={20} backgroundColor="success" />
      </View>
    </View>
  ),
};

export default toastConfig