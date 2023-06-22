import { View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Asset } from 'expo-asset';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AssetCard from '../../components/cards/AssetCard';
import { CoinAssets, CustomTabs, NftAssets } from '../../components';
import WatchlistCard from '../../components/cards/WatchlistCard';

const assets = [
  {
    _id: "648cea94d92f449fb7d14319",
    token: "xrp",
    amount: 1,
    price: 2,
  },
  {
    _id: "648cea94d92sdsf7d14319",
    token: "litecoin",
    amount: 5,
    price: 2,
  },
  {
    _id: "648cea94d92sds14319",
    token: "bitcoin",
    amount: 4000,
    price: 10000,
  }
]

const watchlist = [
  {
    _id: '649418333880dc88c637f293',
    name: 'bitcoin',
    symbol: 'btc',
    currentPrice: '29.4K',
    percentChange: '25',
  },
  {
    _id: '649418333880dc88c637f292',
    name: 'ethereum',
    symbol: 'eth',
    currentPrice: '29.4K',
    percentChange: '-25',
  },
  {
    _id: '649418333880dc88c637f296',
    name: 'litecoin',
    symbol: 'ltc',
    currentPrice: '29.4K',
    percentChange: '-25',
  }
]

const HomeScreen = ({navigation}) => {

  const tabs = ["Coins", "NFTs"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayContentTab = () => {
    switch (activeTab) {
      case "Coins":
        return (
          <CoinAssets assets={assets ?? ["N/A"]} />
        );
      case "Nfts":
        return (
          <NftAssets genericStats={genericStats ?? ["N/A"]} />
        );      
  
    default:
      return null;
    }
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#212244', }}>
      <LinearGradient
      colors={['rgba(1,1,1,0.8)', '#7b00ff']}
      style={{paddingHorizontal: 15, paddingVertical: 20, borderBottomLeftRadius: 26, borderBottomRightRadius: 26}}
      >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItem: 'center', gap: 10, }}>
          <Image
            source={require('../../assets/doodles-pic.png')}
            style={{height: 40, width: 40, borderRadius: 50,borderColor:'#fff',borderWidth: 1, marginBottom: 10}}
          />
          <View>
            <Text style={{color: 'rgba(255,255,255,0.6)'}}>Welcome back</Text>
            <Text style={{color: '#fff', fontWeight: '700',}}>Lara Turner</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{width: '10%', }}>
          <Ionicons name="menu-outline" color="#fff" size={33} style={{textAlign: 'right'}}/>
        </TouchableOpacity>
      </View>
      <Text style={{color: '#fff',}}>
          Portfolio
      </Text>
      <Text style={{color: '#fff',fontSize: 27, fontWeight: '700',}}>
          $ 45,000
      </Text>
    </LinearGradient>

    <View style={{ padding: 16,}}>
      <FlatList
        data={watchlist}
        renderItem={({ item }) => (
          <WatchlistCard
            item={item}
            // handleCardPress={handleCardPress}
          />
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ }}
        horizontal
      />
    </View>

    <View style={{ padding: 16,}}>
      <CustomTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {displayContentTab()}
    </View>

        {/* <View style={{paddingHorizontal: 15, marginTop: 20}}>
          <Text style={{color: '#fff',fontSize: 18, fontWeight: '700',}}>
              Assets
          </Text>
          {assets?.map((asset) => (
              <AssetCard
                token={asset.token}
                key={asset._id}
                amount={asset.amount}
                price={asset.price}
              />
            ))}
        </View> */}
    </ScrollView>
  )
}

export default HomeScreen