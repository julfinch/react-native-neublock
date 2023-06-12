import { StyleSheet, Pressable,Image, ImageBackground, View, Text, TextInput,SafeAreaView, TouchableOpacity, ScrollView, FlatList, ActivityIndicator, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CryptocurrencyCard from '../../components/cards/CryptocurrencyCard';
import headerBg from "../../assets/doodles-bg.png"

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


const NftScreen = ({navigation}) => {
  const [cryptos, setCryptos] = useState([])

  return (
    <View style={styles.safeAreaViewWrapper}>
      <ImageBackground
          source={require('../../assets/doodles-bg.png')}
          style={{ height: 140, paddingHorizontal: 5,}}>
          
          {/* NAV BUTTONS */}
          <View style={styles.navButtonContainer}>
              <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', borderColor: '#fff', borderRadius: 7,padding: 0, backgroundColor: 'rgba(255,255,255,0.7)'}} onPress={() => navigation.navigate('Nft')}>
                <Ionicons name="chevron-back-outline" color="#000" size={33}/>
              </TouchableOpacity>
              
              <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', borderColor: '#fff', borderRadius: 7,padding: 0, backgroundColor: 'rgba(255,255,255,0.7)'}} onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu-outline" color="#000" size={33}/>
              </TouchableOpacity>
          </View>

          <Image
            source={require('../../assets/doodles-pic.png')}
            style={{ height: 80, width: 80,marginTop: 0, borderRadius: 50, borderColor: '#fff', borderWidth: 4,}}
          />
        </ImageBackground>
      
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
    </View>
  )
}

export default NftScreen

const styles = StyleSheet.create({
  safeAreaViewWrapper: {
    flex:1, 
    backgroundColor: '#7b00ff'
  },
  navButtonContainer: {
    marginTop: 20,
    width: '100%',
    marginBottom: 0,
    height: '26%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
