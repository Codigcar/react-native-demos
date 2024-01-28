/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import {Amplify, AWSCloudWatchProvider, Logger} from 'aws-amplify';
import {CloudWatchClient} from '@aws-sdk/client-cloudwatch';
// ES6+ example

// import amplifyconfig from './src/amplifyconfiguration.json';
// Amplify.configure(amplifyconfig);

//* Config para usar aws @aws-sdk/client-cloudwatch-logs
// import {
//   CloudWatchLogsClient,
//   PutLogEventsCommand,
// } from '@aws-sdk/client-cloudwatch-logs';
// import 'react-native-url-polyfill/auto';
// import {createClient} from '@supabase/supabase-js';
// import 'react-native-get-random-values';
// import {v4 as uuidv4} from 'uuid';
//*

import AWS from './src/aws/index';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const sendLoggerWithClientCloudwatchLogs = async () => {
  //* Config para usar aws @aws-sdk/client-cloudwatch-logs
  // const cloudWatchLogsClient = new CloudWatchLogsClient({
  //   region: 'us-east-1',
  //   credentials: {
  //     accessKeyId: 'AKIA3INV6INJCFLZNQVM',
  //     secretAccessKey: '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',
  //   },
  // });
  // const logGroupName = 'aws-cloudwatch-demo-1'; // Reemplaza con el nombre de tu Log Group
  // const logStreamName = '/bambi-2'; // Reemplaza con el nombre de tu Log Stream
  // // Crear un timestamp para el log
  // const timestamp = new Date().getTime();
  // // Crear el evento de log
  // const logEvent = {
  //   message: 'Este es mi mensaje de log',
  //   timestamp,
  // };
  // const putLogEventsCommand = new PutLogEventsCommand({
  //   logGroupName,
  //   logStreamName,
  //   logEvents: [logEvent],
  //   sequenceToken: 'token-previo', // Dejar en blanco si es la primera vez
  // });
  // try {
  //   // Enviar el comando para poner el evento de log
  //   const response = await cloudWatchLogsClient.send(putLogEventsCommand);
  //   // Imprimir la respuesta
  //   console.log('Log enviado con éxito:', response);
  // } catch (error) {
  //   // Manejar errores
  //   console.error('Error al enviar el log:', error);
  // }
  //*
};

const sendLoggerAWSSDK = async () => {
  AWS.config.update({
    accessKeyId: 'AKIA3INV6INJCFLZNQVM',
    secretAccessKey: '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',
    region: 'us-east-1',
  });

  const cloudwatchlogs = new AWS.CloudWatchLogs();
  const logToCloudWatch = async (
    logGroupName: any,
    logStreamName: any,
    logEvent: any,
  ) => {
    const params = {
      logEvents: [
        {
          message: logEvent,
          timestamp: new Date().getTime(),
        },
      ],
      logGroupName,
      logStreamName,
    };

    await cloudwatchlogs.putLogEvents(params).promise();
  };

  const exampleLog = 'Hello, CloudWatch!';

  logToCloudWatch('aws-cloudwatch-demo-1', 'primera-etapa', exampleLog)
    .then(() => console.log('Log enviado exitosamente'))
    .catch(error => console.error('Error al enviar el log:', error));
};

function App(): React.JSX.Element {
  // const logger = new Logger('awscloudwatchdemo1', 'DEBUG');
  // Amplify.register(logger);
  // logger.addPluggable(
  //   new AWSCloudWatchProvider({
  //     logGroupName: 'aws-cloudwatch-demo-1',
  //     logStreamName: '/bambi-2',
  //     region: amplifyconfig.aws_project_region,
  //     credentials: {
  //       accessKeyId: 'AKIA3INV6INJCFLZNQVM',
  //       secretAccessKey: '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',
  //       // sessionToken: client_params.SessionToken,
  //     },
  //   }),
  // );

  // logger.log('dataaaaa');
  sendLoggerAWSSDK();

  //! --->

  sendLoggerWithClientCloudwatchLogs();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
