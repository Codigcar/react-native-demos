import {useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import View from '../box/View';

type ICustomInput = {
  placeholder?: string;
  onChangeText?: any;
  error?: string;
  SuffixComponent?: React.ComponentType;
  secureTextEntry?: any;
};

const CustomInput = ({
  placeholder,
  onChangeText,
  error,
  SuffixComponent,
  ...props
}: ICustomInput) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);
  const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    animatedLabel(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) {
      animatedLabel(0);
    }
  };

  const handleTextChange = (text: string) => {
    setText(text);
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
            value={text}
            textAlignVertical="center"
            textContentType={
              props.secureTextEntry ? 'newPassword' : props.secureTextEntry
            }
            secureTextEntry={showPassword}
          />
          {SuffixComponent ? <SuffixComponent /> : null}
          {props.secureTextEntry && !!text && (
            <View>
              <TouchableOpacity
                style={{width: 24}}
                onPress={() => setShowPassword(!showPassword)}>
                {!showPassword ? (
                  <Text>icono</Text>
                ) : (
                  //   <Icon name="eye-outline" color={'gray'} size={24} />
                  <Text>icono</Text>
                  //   <Icon name="eye-off-outline" color={'gray'} size={24} />
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
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
