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

import CustomButton from '../../../src/components/CustomButton';
import InputField from '../../../src/components/InputField';
import CustomHeader from '../../components/CustomHeader';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#7b00ff'}}>
      <CustomHeader title={'account details'} subtitle={'Provide your credentials below to Login'}/>

      <View style={{paddingTop: 60,paddingHorizontal: 25, backgroundColor: '#212244', height: '70%' }}>
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
          style={{marginBottom: 50,}}
        />
        <CustomButton width={'100%'} label={"Login"} onPress={() => {}}/>

        <Text style={{textAlign: 'center', color: '#fff', marginVertical: 40,  fontSize: 15,}}>
          or login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.social}>
              <Image source={require('../../assets/images/misc/google.png')}
              style={styles.socLogo}
              />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.social}>
              <Image source={require('../../assets/images/misc/facebook.png')}
              style={styles.socLogo}
              />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.social}>
              <Image source={require('../../assets/images/misc/twitter.png')}
              style={styles.socLogo}
              />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{color: '#fff',  fontSize: 15,}}>New to the app? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#7008CB', fontWeight: '700', fontSize: 15,}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
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
  logo: {
    marginTop: 0,
    width: 24,
    height: 24,
  },
  social: {
    borderColor: '#2A2B54',
    borderWidth: 1,
    borderRadius: 7, 
    backgroundColor: '#2A2B54',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  socLogo: {
    width: 20,
    height: 20,
  },
});
