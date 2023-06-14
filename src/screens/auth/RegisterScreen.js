import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';


import CustomButton from '../../../src/components/CustomButton';
import InputField from '../../../src/components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RegisterScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

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
          personal details 
        </Text>
        <Text style={styles.textProvide}>Register by providing your credentials below</Text>
      </View>
      
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 30,paddingHorizontal: 25, backgroundColor: '#212244', height: '70%' }}>
        <View style={{alignItems: 'center'}}>
        </View>

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

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          or register with email ...
        </Text>

        <InputField
          label={'First Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

        <InputField
          label={'Last Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

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
        />

        <CustomButton width={'100%'}  label={'Register'} onPress={() => {}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 30,
          }}>
          <Text style={{color: '#fff',  fontSize: 17,}}>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#7008CB', fontWeight: '700', fontSize: 17,}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;


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
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  socLogo: {
    width: 20,
    height: 20,
  },
});
