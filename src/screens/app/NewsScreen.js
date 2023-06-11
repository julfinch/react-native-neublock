import { StyleSheet, View, Text, Button, SafeAreaView, TouchableOpacity, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import millify from 'millify';
import { Value, About, CryptoTabs, Stats } from '../../components';

const token = 
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
  }

  function TabButton({ change }) {
    return (
      <View style={styles.coinPercentage(change)}>
        <Text>
          {change > 0 ? <Ionicons name="caret-up" color="white" size={16} style={styles.caret}/> : <Ionicons name="caret-down" color="white" size={16} />}
          
        </Text>
        <Text style={styles.changeText}>
          {change} %
        </Text>
      </View>
    );
  }

const NewsScreen = ({navigation}) => {
  const coin = token;
  const stats = [
    { title: 'Price to USD', value: `$ ${coin?.price && millify(coin?.price)}`, icon: <Ionicons name="logo-usd" color="#fff" size={14}/> },
    { title: 'Rank', value: coin?.rank, icon: <Ionicons name="medal-outline" color="#fff" size={14}/> },
    { title: '24h Volume', value: `$ ${coin?.dailyVolume && millify(coin?.dailyVolume)}`, icon: <Ionicons name="flash-outline" color="#fff" size={14}/> },
    { title: 'Market Cap', value: `$ ${coin?.marketCap && millify(coin?.marketCap)}`, icon: <Ionicons name="logo-usd" color="#fff" size={14}/> },
    { title: 'All-time-high(daily avg.)', value: `$ ${coin?.allTimeHigh?.price && millify(coin?.allTimeHigh?.price)}`, icon: <Ionicons name="rocket-outline" color="#fff" size={14}/> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: coin?.numberOfMarkets, icon: <Ionicons name="basket-outline" color="#fff" size={14}/> },
    { title: 'Number Of Exchanges', value: coin?.numberOfExchanges, icon: <Ionicons name="cash-outline" color="#fff" size={14}/> },
    { title: 'Approved Supply', value: coin?.supply?.confirmed ? <Ionicons name="checkmark-outline" color="#fff" size={14}/> : <Ionicons name="close-outline" color="#fff" size={14}/>, icon: <Ionicons name="alert-circle-outline" color="#fff" size={14}/> },
    { title: 'Total Supply', value: `$ ${coin?.supply?.total && millify(coin?.supply?.total)}`, icon: <Ionicons name="alert-circle-outline" color="#fff" size={14}/> },
    { title: 'Circulating Supply', value: `$ ${coin?.supply?.circulating && millify(coin?.supply?.circulating)}`, icon: <Ionicons name="alert-circle-outline" color="#fff" size={14}/> },
  ];

  const tabs = ["Value", "Stats", "About"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayContentTab = () => {
    switch (activeTab) {
      case "Value":
        return (
          <Value stats={stats ?? ["N/A"]} coin={coin}/>
        );
      case "Stats":
        return (
          <Stats genericStats={genericStats ?? ["N/A"]} coin={coin}/>
        );
      case "About":
        return (
          <About about={coin ?? ["N/A"]}/>
        );
      
  
    default:
      return null;
    }
  }

  return (
    <SafeAreaView style={styles.safeAreaViewWrapper}>
      <View style={styles.headerWrapper}>
        {/* NAV BUTTONS */}
        <View style={styles.navButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Cryptocurrency')}>
              <Ionicons name="chevron-back-outline" color="#fff" size={33}/>
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>{coin?.name}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="list-circle-outline" color="#fff" size={33}/>
            </TouchableOpacity>
        </View>

        {/* PRICE CHANGE */}
        <View style={styles.headerStats}>
          <Text style={styles.price}>
            ${coin?.price && millify(coin?.price)}
          </Text>
          <TabButton
            change={coin?.change}
          />
        </View>
      </View>
      <Text>NewsScreen {coin?.price}</Text>
      <Text>{coin?.name}</Text>
      
      {/* JOB TABS */}
      
      <>
        <ScrollView showsVerticalScrollIndicator={false}
        >
            <View style={{ padding: 16, paddingBottom: 100 }}>
              <CryptoTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayContentTab()}
            </View>
        </ScrollView>

      </>

    </SafeAreaView>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
  safeAreaViewWrapper: {
    flex:1, 
    backgroundColor: '#212244',
    padding: 8,
  },
  headerWrapper: {
    marginTop: 16,
    paddingHorizontal: 8, 
    flexDirection: 'column', 
    flex: 1, 
    maxHeight: 260,
  },
  navButtonContainer: {
    width: '100%',
    marginBottom: 14,
    height: 33,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: {
    width: '50%',
    height: '50%',
    tintColor: '#fff',
    overlayColor: '#fff',
  },
  title: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 300,
  },
  headerStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coinPercentage: (change) => ({
    color: '#fff',
    width: 70,
    flexDirection: 'row',
    backgroundColor: change > 0 ? 'limegreen' : "red",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  }),
  changeText: {
    color: '#fff',
  },
  price: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 800,
  },

});
