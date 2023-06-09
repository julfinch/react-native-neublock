import { StyleSheet, View, Text, TextInput,SafeAreaView, TouchableOpacity, ScrollView, FlatList, ActivityIndicator, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CryptocurrencyCard from '../components/cards/CryptocurrencyCard';

const data = [
  {
    name: 'bitcoin',
    price: '$ 26K',
    cap: '36B',
    profit:+ 2.4
  },
  {
    name: 'ethereum',
    price: '$ 26K',
    cap: '36B',
    profit: -2.4,
  },
  {
    name: 'usdt',
    price: '$ 26K',
    cap: '36B',
    profit: + 2.4,
  },
  {
    name: 'bnb',
    price: '$ 26K',
    cap: '36B',
    profit: -2.4,
  },
  {
    name: 'polygon',
    price: '$ 26K',
    cap: '36B',
    profit: -2.4,
  },
  {
    name: 'solana',
    price: '$ 26K',
    cap: '36B',
    profit: + 2.4,
  },
  {
    name: 'ada',
    price: '$ 26K',
    cap: '36B',
    profit: -2.4,
  },
  {
    name: 'litecoin',
    price: '$ 26K',
    cap: '36B',
    profit: -2.4,
  },
  {
    name: 'aida',
    price: '$ 26K',
    cap: '36B',
    profit: + 2.4,
  },
  {
    name: 'lorna',
    price: '$ 26K',
    cap: '36B',
    profit: -2.4,
  },
  {
    name: 'fe',
    price: '$ 26K',
    cap: '36B',
    profit: -2.4,
  },
  {
    name: 'cron',
    price: '$ 26K',
    cap: '36B',
    profit: + 2.4,
  },
  {
    name: 'keppel',
    price: '$ 26K',
    cap: '36B',
    profit: -2.4,
  },
  {
    name: 'murnia',
    price: '$ 26K',
    cap: '36B',
    profit: + 2.4,
  },
]

const CryptocurrencyScreen = ({navigation}) => {
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setCryptos(data)
    const filteredData = data.filter((item) => item.name.toLowerCase().includes(searchTerm));
    setCryptos(filteredData)
  }, [data, searchTerm])
  
  return (
    <SafeAreaView style={styles.safeAreaViewWrapper}>
      <View style={styles.headerWrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Top 100 Cryptocurrencies
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()} style={{width: '10%', }}>
            <Ionicons name="list-circle-outline" color="#fff" size={33} style={{textAlign: 'right'}}/>
          </TouchableOpacity>
        </View>
        <View style={styles.searchWrapper}>
          <Ionicons name="search-outline" size={22}  />
          <TextInput style={styles.searchInput} placeholder='Enter token name' onChangeText={(text) => setSearchTerm(text.toLowerCase())}/>
        </View>
      </View>
      <ScrollView style={styles.scrollViewWrapper} showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 20,}}>
          {cryptos?.map((token) => (
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
  safeAreaViewWrapper: {
    flex:1, 
    backgroundColor: '#7b00ff'
  },
  headerWrapper: {
    paddingHorizontal: 8, 
    flexDirection: 'column', 
    flex: 1, 
    marginTop: 30,
    marginBottom: 0,
    minHeight: 110,
  },
  container: {
    width: '100%',
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 600,
    width: '90%',
  },
  searchWrapper: {
    flexDirection: 'row' ,
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor: '#fff', 
    width: '100%', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 50,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 8,
  },
  scrollViewWrapper: {
    padding: 7, 
    flexDirection: 'column', 
    backgroundColor: '#212244', 
    width: '100%', 
    minHeight: '80%'
  }
});
