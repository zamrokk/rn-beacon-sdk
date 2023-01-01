import { StyleSheet, Text, View } from 'react-native';

import * as RnBeaconSdk from 'rn-beacon-sdk';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{RnBeaconSdk.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
