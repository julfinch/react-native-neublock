import { StyleSheet, View, Text, TextInput,SafeAreaView, ScrollView, FlatList, ActivityIndicator, } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CryptocurrencyCard from '../components/cards/CryptocurrencyCard';

const data = [
  {
    name: 'bitcoin',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'ethereum',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'usdt',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'bnb',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'polygon',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'solana',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'ada',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'litecoin',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'aida',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'lorna',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'fe',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'cron',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'keppel',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
  {
    name: 'murnia',
    price: '$ 26K',
    cap: '36B',
    profit: '+ 2.4%',
  },
]

const CryptocurrencyScreen = () => {
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <View style={{padding: 14, flexDirection: 'column', flex: 1, marginTop: 30, marginBottom: 40, height: 80}}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Top 100 Cryptocurrencies
          </Text>
        </View>
        <View style={styles.searchWrapper}>
          <Ionicons name="search-outline" size={22}  />
          <TextInput style={styles.searchInput} placeholder='Enter token name' keyboardType="default"/>
        </View>
      </View>
      <ScrollView style={{padding: 7, flexDirection: 'column', marginTop: 40}} showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 20,}}>
          {data?.map((token) => (
              <CryptocurrencyCard
                token={token}
                key={token.name}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CryptocurrencyScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 6,
    height: 30,
  },
  title: {
    fontSize: 20,
  },
  searchWrapper: {
    flexDirection: 'row' ,
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor: 'gray', 
    width: '100%', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
    height: 50,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 8,

  }
});
