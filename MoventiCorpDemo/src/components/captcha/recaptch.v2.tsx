import React, { useRef } from 'react';
import { View, Button } from 'react-native';

import Recaptcha from "react-native-recaptcha-that-works";

// ...

const RecaptchaV2: React.FC = () => {
    const recaptcha = useRef<any>(null);

    const send = () => {
        console.log('send!');
        recaptcha.current?.open();
    };

    const onVerify = (token: string) => {
        console.log('success!', token);
    };

    const onExpire = () => {
        console.warn('expired!');
    }

    return (
        <View>
            <Recaptcha
                ref={recaptcha}
                siteKey="<your-recaptcha-public-key>"
                baseUrl="http://my.domain.com"
                onVerify={onVerify}
                onExpire={onExpire}
                size="invisible"
            />
            <Button title="Send" onPress={send} />
        </View>
    );
};

export default RecaptchaV2