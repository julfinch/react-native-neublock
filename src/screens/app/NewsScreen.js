import { Dimensions, StyleSheet, View, Text, Button, SafeAreaView, TouchableOpacity, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import millify from 'millify';
import { Value, About, Stats, CustomTabs } from '../../components';
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';
import { useRoute } from "@react-navigation/native";

export const {width: SIZE} = Dimensions.get('window');

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
  }

  export const data = [
    {x: 1453075200, y: 1.47}, {x: 1453161600, y: 1.37},
    {x: 1453248000, y: 1.53}, {x: 1453334400, y: 1.54},
    {x: 1453420800, y: 1.52}, {x: 1453507200, y: 2.03},
    {x: 1453593600, y: 2.10}, {x: 1453680000, y: 2.50},
    {x: 1453766400, y: 2.30}, {x: 1453852800, y: 2.42},
    {x: 1453939200, y: 2.55}, {x: 1454025600, y: 2.41},
    {x: 1454112000, y: 2.43}, {x: 1454198400, y: 2.20},
  ];

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

  const sparkline = token.sparkline;
  const points = monotoneCubicInterpolation({data, range: 40});

const NewsScreen = ({navigation}) => {
  const coin = token;
  const route = useRoute();
  const {
    params: { coinId },
  } = route;
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

  // const formatUSD = value => {
  //   'worklet';
  //   if (value === '') {
  //     const formattedValue = `$${latestCurrentPrice.value.toLocaleString('en-US', { currency: 'USD' })}`
  //     return formattedValue;
  //   }

  //   const formattedValue =`$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
  //   return formattedValue;
  // };

  return (
    
    <SafeAreaView style={styles.safeAreaViewWrapper}>
      <View style={styles.headerWrapper}>
        {/* NAV BUTTONS */}
        <View style={styles.navButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Cryptocurrency')}>
              <Ionicons name="chevron-back-outline" color="#fff" size={33}/>
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>{coin?.name}{coinId}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu-outline" color="#fff" size={33}/>
            </TouchableOpacity>
        </View>

      </View>
      <>
        <ScrollView style={styles.scrollViewWrapper} showsVerticalScrollIndicator={false}>
          {/* PRICE CHANGE */}
        <View style={styles.headerStats}>
          <Text style={styles.price}>
            ${coin?.price && millify(coin?.price)}
          </Text>
          <TabButton
            change={coin?.change}
          />
        </View>
        {/* CHART */}
        <View style={styles.chartViewWrapper}>

        </View>
        {/* <ChartPathProvider data={{ points, smoothingStrategy: 'bezier' }}>
          <ChartYLabel format={formatUSD} style={{backgroundColor: 'black', color: 'green', margin: 4,}}/>
          <View style={styles.chartWrapper}>
            <ChartPath height={SIZE / 2} stroke="white" width={SIZE} />
        <ChartDot style={{ backgroundColor: 'yellow' }} />
          </View>
        
      </ChartPathProvider> */}
        
        {/* CRYPTO TABS */}
            <View style={{ padding: 16,}}>
              <CustomTabs
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
    backgroundColor: '#1c1d42',
    paddingTop: 8,
  },
  scrollViewWrapper: {
    backgroundColor: '#212244',
  },
  headerWrapper: {
    marginTop: 16,
    paddingHorizontal: 8, 
    flexDirection: 'column', 
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
    paddingTop: 10,
    paddingHorizontal: 13,
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
  chartViewWrapper: {
    height: 290,
  },
  chartWrapper: {
    marginTop: 40,
  }
});
