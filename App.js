import * as React from 'react';
import { Button, View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Username/Email
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Email/Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Text style={styles.label}>
        Password
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('Beranda')}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  headerr: {
    fontFamily: 'OpenSans-SemiBold',
    color: 'red'
  },
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  textParagraph: {
    marginTop: 5,
    fontFamily: 'OpenSans-Regular',
    margin: 30,
    alignContent: 'center',
    textAlign: 'center',
    color: '#6B6B6B'
  },
  textContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: 'OpenSans-Bold',
    fontWeight: "bold",
    fontSize: 20,
    color: '#3C3C3C',
  },
  imageContainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: 900,
    height: 200,
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: '#0750B5',
  },
  text: {
    fontSize: 14,
    // lineHeight: 21,
    fontFamily: 'OpenSans-SemiBold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
export default App;