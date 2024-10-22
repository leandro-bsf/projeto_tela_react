import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gráfico do Looker Studio</Text>
      <WebView
        source={{ uri: 'https://lookerstudio.google.com/embed/reporting/2c2767a8-6448-4fe2-b176-7fc6775b82b3/page/KSiDE' }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  webview: {
    height: 600,
    width: '100%',
  },
});

export default App;
