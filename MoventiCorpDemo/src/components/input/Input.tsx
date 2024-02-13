import {useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import View from '../box/View';
import {Noop} from 'react-hook-form';

type ICustomInput = {
  placeholder?: string;
  onChangeText?: any;
  errors?: string;
  SuffixComponent?: React.ComponentType;
  secureTextEntry?: any;
  onBlur?: Noop;
  value: string;
};

const CustomInput = ({
  errors,
  onBlur,
  onChangeText,
  placeholder,
  SuffixComponent,
  value,
  ...props
}: ICustomInput) => {
  const [isFocused, setIsFocused] = useState(false);
  // const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);
  const labelPosition = useRef(new Animated.Value(value ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    animatedLabel(1);
  };

  const handleBlur = () => {
    onBlur && onBlur();
    setIsFocused(false);
    if (!value) {
      animatedLabel(0);
    }
  };

  const handleTextChange = (text: string) => {
    // setText(text);
    if (onChangeText) {
      onChangeText(text);
    }
    if (text) {
      animatedLabel(1);
    } else {
      animatedLabel(isFocused ? 1 : 0);
    }
  };

  const animatedLabel = (toValue: any) => {
    Animated.timing(labelPosition, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const labelStyle = {
    left: 20,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [17, -10],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: ['gray', '#888'],
    }),
  };

  return (
    <View>
      <View
        borderColor={isFocused ? 'primary' : 'gray-900'}
        borderRadius="full"
        borderWidth={1}
        height={60}
        justifyContent="center"
        paddingBottom="s">
        <View backgroundColor="white" flex={1}>
          <Animated.Text style={[styles.label, labelStyle]}>
            {placeholder}
          </Animated.Text>
        </View>
        <View alignItems="center" flexDirection="row" paddingRight="l">
          <TextInput
            {...props}
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleTextChange}
            value={value}
            textAlignVertical="center"
            textContentType={
              props.secureTextEntry ? 'newPassword' : props.secureTextEntry
            }
            secureTextEntry={showPassword}
          />
          {SuffixComponent ? <SuffixComponent /> : null}
          {props.secureTextEntry && !!value && (
            <View>
              <TouchableOpacity
                style={{width: 24}}
                onPress={() => setShowPassword(!showPassword)}>
                {!showPassword ? (
                  <Text>icono</Text>
                ) : (
                  <Text>icono</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      {errors ? <Text style={styles.errorText}>{errors}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    color: 'black',
    backgroundColor: 'white',
    fontSize: 12,
    lineHeight: 35,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 50,
    marginTop: 10,
    paddingLeft: 25,
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    color: 'red',
  },
});

export default CustomInput;
