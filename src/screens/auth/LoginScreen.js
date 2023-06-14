import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../../assets/images/misc/login.svg';
import GoogleSVG from '../../assets/images/misc/google.svg';
import FacebookSVG from '../../assets/images/misc/facebook.svg';
import TwitterSVG from '../../assets/images/misc/twitter.svg';

import CustomButton from '../../../src/components/CustomButton';
import InputField from '../../../src/components/InputField';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#7b00ff'}}>
      <View style={{paddingHorizontal: 25, height: '30%', paddingTop: 50 }}>
          <View style={styles.appName}>
              <Image source={require('../../assets/neublock-logo.png')}
                style={styles.logo}
              />
            <Text style={styles.appNameNeu}>NeuBlock</Text>
            
          </View>
          <Text
          style={{
            fontSize: 26,
            fontWeight: '500',
            color: '#fff',
            marginBottom: -10,
          }}>
          Enter your
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '500',
            color: '#fff',
            marginBottom: 20,
          }}>
          account details
        </Text>
        <Text style={styles.textProvide}>Provide your personal details below</Text>
      </View>

      <View style={{paddingHorizontal: 25, backgroundColor: '#212244', height: '70%' }}>
        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />
        <InputField
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        <CustomButton label={"Login"} onPress={() => {}} />

        <Text style={{textAlign: 'center', color: '#666', marginVertical: 30}}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaViewWrapper: {
    justifyContent: 'center',
    position: 'relative',
  },
  appName: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 5,
    alignItems: 'center',
  },
  appNameNeu: {
    fontSize: 16,
    fontWeight: 700,
    color: '#fff',
  },
  textProvide:{
    fontSize: 14,
    fontWeight: 400,
    color: '#fff',
  },
  imageBg: {
    height: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 0,
    width: 30,
    height: 30,
  },
});
