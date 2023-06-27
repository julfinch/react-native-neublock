import { StyleSheet, Pressable,Image,Linking, ImageBackground, View, Text, TextInput,SafeAreaView, TouchableOpacity, ScrollView, FlatList, ActivityIndicator, } from 'react-native'
import React, { useEffect, useState } from 'react'
import millify from 'millify';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NftCard from '../../components/cards/NftCard';

const collection = 
  {
  large_image_url:"https://lh3.googleusercontent.com/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw=s300",
  discord_url:"https://discord.gg/doodles",
  name:"Doodles",
  telegram_url:null,
  external_url:"https://doodles.app",
  banner_image_url:"https://lh3.googleusercontent.com/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw=s2500",
  featured_image_url:"https://lh3.googleusercontent.com/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw=s300",
  description:"A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury.",
  slug:"doodles-official",
  image_url:"https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s120",
  wiki_url:null,
  instagram_username:null,
  twitter_username:"doodles",
  stats: {
    one_day_average_price:17.174571428571,
    total_sales:20932,
    one_day_volume:360.666,
    total_supply:10000,
    num_reports:66,
    thirty_day_volume:13698.027142879,
    one_day_sales:21,
    thirty_day_sales:890,
    num_owners:4667,
    count:10000,
    seven_day_sales:94,
    seven_day_average_price:15.62684556665,
    one_day_change:-0.10235322601905,
    floor_price:15,
    market_cap:156268.4556665,
    seven_day_volume:1468.9234832651,
    average_price:4.9485129341131,
    thirty_day_change:0.34943800342143,
    thirty_day_average_price:15.391041733572,
    total_volume:103582.27273686,
    seven_day_change:-0.71858668711996,
  },
  payout_address:"0xdcd382be6cc4f1971c667ffda85c7a287605afe4",
  }

const nfts = [
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
  {
    id:349506709,
    name:"Beated Ape #23616",
    image_url:"https://lh3.googleusercontent.com/7w8AB56ZITr6hVBbuOOIIMqWj5xPJKBXBGFTdCLQOeE1jn27C-IRXs5zUqPGLXx0caJ-miDl_6SXDAOiFxApI7Oj_wMHwfCrhFvCrgo"
  },
]


const NftScreen = ({navigation}) => {
  const [cryptos, setCryptos] = useState([])
  const nft = collection;
  const nftStats = [
    { title: 'items', value: nft?.stats?.count , icon: <Ionicons name="logo-usd" color="#fff" size={0}/> },
    { title: 'owners', value: nft?.stats?.num_owners , icon: <Ionicons name="medal-outline" color="#fff" size={0}/> },
    { title: 'floor price', value: ` ${nft?.stats?.floor_price && millify(nft?.stats?.floor_price)}`, icon: <FontAwesome5 name="ethereum" size={17} color="#fff" /> },
    { title: '7day sales', value: ` ${nft?.stats?.seven_day_sales && millify(nft?.stats?.seven_day_sales)}`, icon: <FontAwesome5 name="ethereum" size={17} color="#fff" /> },
  ];
  return (
    <ScrollView  showsVerticalScrollIndicator={false} style={styles.safeAreaViewWrapper}>
      <ImageBackground
          source={{uri: collection?.banner_image_url}}
          style={{ height: 140, paddingHorizontal: 5, position: 'relative',}}>
          
          {/* NAV BUTTONS */}
          <View style={styles.navButtonContainer}>
              <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Nft')}>
                <Ionicons name="chevron-back-outline" color="#000" size={33}/>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.navButton} onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu-outline" color="#000" size={33}/>
              </TouchableOpacity>
          </View>
            <Image source={{uri: collection?.image_url}}
            style={styles.assetImage}
          />
          
        </ImageBackground>
      
      <View style={styles.scrollViewWrapper}>
        <View style={styles.linksWrapper}>
          <TouchableOpacity onPress={() => {Linking.openURL(collection?.discord_url);}}>
            <FontAwesome5 name="discord" size={17} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {Linking.openURL(collection?.external_url);}}>
            <FontAwesome5 name="globe" size={17} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {Linking.openURL(`https://twitter.com/${collection?.twitter_username}`);}}>
            <FontAwesome5 name="twitter" size={17} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.nftName}>{nft?.name}</Text>
        <Text style={styles.nftDesc}>{nft?.description}</Text>
        <View style={styles.statsWrapper}>
          {nftStats?.map((stats, index) => (
            <View key={index} style={{alignItems: 'center', flexDirection: 'column', paddingVertical: 12, width: 80, borderRadius: 7, backgroundColor: '#2A2B54',}}>
              <Text style={styles.nftStatsValue}>{stats?.icon} {stats?.value}</Text>
              <Text style={styles.nftStatsTitle}>{stats?.title}</Text>
            </View>
          ))}
        </View>
        <Text style={{textAlign: 'center', color: '#fff', fontWeight: 800, fontSize: 17, marginBottom: 13}}>NFTs</Text>
        <View style={styles.assetsGrid}>
          {nfts?.map((nft, index) => (
            <NftCard nft={nft} key={index}/>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default NftScreen

const styles = StyleSheet.create({
  safeAreaViewWrapper: {
    flex:1, 
    backgroundColor: '#7b00ff'
  },
  navButton: {
    alignItems: 'center', 
    justifyContent: 'center', 
    borderColor: '#fff', 
    borderRadius: 7,
    backgroundColor: 'rgba(255,255,255,0.7)',
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
  assetImage: {
    height: 80, 
    position: 'absolute', 
    width: 80, 
    marginTop: 80,
    marginLeft: 10, 
    zIndex: 10, 
    borderRadius: 50, 
    borderColor: '#fff', 
    borderWidth: 4,
  },
  linksWrapper: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    gap: 20,
  },
  nftName: { 
    // marginTop: 10,
    color: '#fff',
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 4,
  },
  nftDesc: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 17,
  },
  statsWrapper: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  nftStatsValue: {
    fontWeight: 700,
    color: '#fff',
  },
  nftStatsTitle: {
    color: '#fff',
    fontSize: 11,
  },
  assetsGrid: {
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
  scrollViewWrapper: {
    padding: 10, 
    flexDirection: 'column', 
    backgroundColor: '#212244', 
    width: '100%', 
    minHeight: '80%',
    zIndex: -10,
  }
});
