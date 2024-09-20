/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

function App(): React.JSX.Element {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;
