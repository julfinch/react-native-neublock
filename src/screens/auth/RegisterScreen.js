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
import * as ImagePicker from 'expo-image-picker'


import CustomButton from '../../../src/components/CustomButton';
import InputField from '../../../src/components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../../components/CustomHeader';

const RegisterScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1,1],
      quality: 1,
    });
    console.log(result);

    if(!result.canceled){
      setImage(result.uri);
    }
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: '#7b00ff'}}>
      <CustomHeader title={'personal details'} subtitle={'Register by providing your credentials'}/>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 20,paddingHorizontal: 25, backgroundColor: '#212244', height: '70%' }}>
        <View style={{alignItems: 'center'}}>
        </View>

        <TouchableOpacity
            onPress={pickImage}
            style={styles.avatarWrapper}>
              {image ? <Image source={{ uri: image}}
              style={styles.avatar}
              /> : <Image source={require('../../assets/images/misc/avatar_blank.png')}
              style={styles.avatar}
              />}
          </TouchableOpacity>

        {/* <View
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
        </View> */}

        <Text style={{textAlign: 'center', color: '#666', marginVertical: 10}}>
          Add photo
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
            marginVertical: 20,
          }}>
          <Text style={{color: '#fff',  fontSize: 15,}}>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#7008CB', fontWeight: '700', fontSize: 15,}}> Login</Text>
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
  avatar: {borderColor: '#ddd',
  borderWidth: 1,
  borderRadius: 50,
    width: 80,
    height: 80,
  },
  avatarWrapper: {
    alignItems: 'center',
  },
});
