import {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
// import Clipboard from '@react-native-clipboard/clipboard';

const InputOTP = () => {
  const [otpInput, setOtpInput] = useState<string>('');
  console.log('🚀 ---------------------------------------------------------🚀');
  console.log('🚀 ~ file: InputOTP.tsx:8 ~ InputOTP ~ otpInput:', otpInput);
  console.log('🚀 ---------------------------------------------------------🚀');

  const input = useRef<OTPTextView>(null);

  //   const clear = () => input.current?.clear();

  //   const updateOtpText = () => input.current?.setValue(otpInput);

  //   const showTextAlert = () => otpInput && Alert.alert(otpInput);

  const handleCellTextChange = async (text: string, i: number) => {
    // if (i === 0) {
    //   const clippedText = await Clipboard.getString();
    //   if (clippedText.slice(0, 1) === text) {
    //     input.current?.setValue(clippedText, true);
    //   }
    // }
  };

  return (
    <OTPTextView
      ref={input}
      //   containerStyle={styles.textInputContainer}
      handleTextChange={setOtpInput}
      handleCellTextChange={handleCellTextChange}
      inputCount={4}
      keyboardType="numeric"
      textInputStyle={{
        borderColor: '#73716E',
        borderWidth: 2,
        borderRadius: 20,
        width: 70,
        height: 64,
        borderBottomWidth: 2,
      }}
      tintColor="black"
    />
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: 20,
  },
});

export default InputOTP;
