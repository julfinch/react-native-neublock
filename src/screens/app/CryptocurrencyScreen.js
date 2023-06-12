import { StyleSheet, Pressable, View, Text, TextInput,SafeAreaView, TouchableOpacity, ScrollView, FlatList, ActivityIndicator, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CryptocurrencyCard from '../../components/cards/CryptocurrencyCard';
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    uuid:"Qwsogvtv82FCd",
    symbol:"BTC",
    name:"Bitcoin",
    description:"Bitcoin is the first decentralized digital currency.",
    color:"#f7931A",
    iconUrl:"https://cdn.coinranking.com/Sy33Krudb/btc.svg",
    websiteUrl:"https://bitcoin.org",
    supply: {
      circulating:"17009275",
      total:"21000000",
      },
    dailyVolume:"6818750000",
    marketCap:"159393904304",
    price:"25656.9993109108",
    btcPrice:"1",
    change:"-0.52",
    rank:1,
    links:[
      {
        name:"Bitcoin",
        url:"https://www.reddit.com/r/Bitcoin/",
        type:"reddit",
      },
      {
        name:"Bitcoin",
        url:"https://www.reddit.com/r/Bitcoin/",
        type:"linkedin",
      },
      {
        name:"Bitcoin",
        url:"https://www.reddit.com/r/Bitcoin/",
        type:"youtube",
      },
      {
        name:"Bitcoin",
        url:"https://www.reddit.com/r/Bitcoin/",
        type:"website",
      },
    ],
    numberOfMarkets:9800,
    numberOfExchanges:190,
    sparkline: 
    [
      9515.0454185372,
      9540.1812284677,
      9554.2212643043,
      9593.571539283,
      9592.8596962985,
      9562.5310295967,
      9556.7860427046,
      9388.823394515,
      9335.3004209165,
      9329.4331700521,
      9370.9993109108,
    ],
    allTimeHigh: {
      price:"19500.471361532",
      timestamp:1513555200,
    },
    coinrankingUrl:"https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
    
  },
  {
    name: 'ethereum',
    price: '$ 26K',
    marketCap: '36B',
    change: -2.4,
  },
  {
    name: 'usdt',
    price: '$ 26K',
    marketCap: '36B',
    change: + 2.4,
  },
  {
    name: 'bnb',
    price: '$ 26K',
    marketCap: '36B',
    change: -2.4,
  },
  {
    name: 'polygon',
    price: '$ 26K',
    marketCap: '36B',
    change: -2.4,
  },
  {
    name: 'solana',
    price: '$ 26K',
    marketCap: '36B',
    change: + 2.4,
  },
  {
    name: 'ada',
    price: '$ 26K',
    marketCap: '36B',
    change: -2.4,
  },
  {
    name: 'litecoin',
    price: '$ 26K',
    marketCap: '36B',
    change: -2.4,
  },
  {
    name: 'aida',
    price: '$ 26K',
    marketCap: '36B',
    change: + 2.4,
  },
  {
    name: 'lorna',
    price: '$ 26K',
    marketCap: '36B',
    change: -2.4,
  },
  {
    name: 'fe',
    price: '$ 26K',
    marketCap: '36B',
    change: -2.4,
  },
  {
    name: 'cron',
    price: '$ 26K',
    marketCap: '36B',
    change: + 2.4,
  },
  {
    name: 'keppel',
    price: '$ 26K',
    marketCap: '36B',
    change: -2.4,
  },
  {
    name: 'murnia',
    price: '$ 26K',
    marketCap: '36B',
    change: + 2.4,
  },
]


const CryptocurrencyScreen = () => {
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const navigation = useNavigation();

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
            <Ionicons name="menu-outline" color="#fff" size={33} style={{textAlign: 'right'}}/>
          </TouchableOpacity>
        </View>
        <View style={styles.searchWrapper}>
          <Ionicons name="search-outline" size={22}  />
          <TextInput style={styles.searchInput} placeholder='Enter token name' onChangeText={(text) => setSearchTerm(text.toLowerCase())}/>
        </View>
      </View>
      <ScrollView style={styles.scrollViewWrapper} showsVerticalScrollIndicator={false}>
        <Pressable style={{paddingBottom: 20,}}>
          {cryptos?.map((token) => (
              <CryptocurrencyCard
                token={token}
                key={token.name}
                handleNavigate={() => navigation.navigate("News", {coinId: token.uuid})}
              />
            ))}
        </Pressable>
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
    marginTop: 20,
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
