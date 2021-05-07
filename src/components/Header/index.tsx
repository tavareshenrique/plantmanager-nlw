import React, { useEffect, useState }from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userImg from '../../assets/henrique.jpg';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Header() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function getUserName() {  
      const userNameStorage = await AsyncStorage.getItem('@plantmanager:user');

      if (userNameStorage) {
        setUserName(userNameStorage);
      }
    }

    getUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>      
      </View>

      <Image style={styles.image} source={userImg} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,    
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  }
})