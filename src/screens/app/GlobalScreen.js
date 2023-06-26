import { StyleSheet, Pressable, View, Text, TextInput,SafeAreaView, TouchableOpacity, ScrollView, FlatList, ActivityIndicator, } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyDistricts from '../../components/nft/MyDistricts';
import { COLORS, FONT, SIZES, images } from "../../../constants";
import PopularDistricts from '../../components/nft/PopularDistricts';

const myDistricts = [
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

const popularDistricts = [
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
  },
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
  },
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
  },
]

const GlobalScreen = ({navigation}) => {

  const handleCardPress = (item) => {
    navigation.navigate("News", {coinId: item.uuid})
    // setSelectedJob(item.job_id);
  };

  return (
    <SafeAreaView style={styles.safeAreaViewWrapper}>
      <View style={styles.headerWrapper}>
        <View style={styles.container}>
          <Text style={styles.title}>
            NFTs
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

    {/* MY DISTRICTS */}
    <View style={{ paddingHorizontal: 10, }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={styles.sectionHeader}>My Districts</Text>
        {/* <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate("Cryptocurrency")}>
          <Text style={{ color: '#fff'}}>See all coins</Text>
          <Ionicons name="chevron-forward-outline" color="#fff" size={20}/>
        </TouchableOpacity> */}
      </View>
    
      <FlatList
        data={myDistricts}
        renderItem={({ item }) => (
            <MyDistricts
              item={item}
              handleCardPress={handleCardPress}
            />
          
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ gap: 15}}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>

    {/* POPULAR DISTRICTS */}
    <View style={{ paddingHorizontal: 10, marginTop: 20, }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={styles.sectionHeader}>Popular Districts</Text>
        {/* <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate("Cryptocurrency")}>
          <Text style={{ color: '#fff'}}>See all coins</Text>
          <Ionicons name="chevron-forward-outline" color="#fff" size={20}/>
        </TouchableOpacity> */}
      </View>
    
      <FlatList
        data={popularDistricts}
        renderItem={({ item }) => (
            <PopularDistricts
              item={item}
              handleCardPress={handleCardPress}
            />
          
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ gap: 15}}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>


        {/* YOU MIGHT LIKE */}
        <View style={{ paddingHorizontal: 10, }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={styles.sectionHeader}>You might like</Text>
        {/* <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate("Cryptocurrency")}>
          <Text style={{ color: '#fff'}}>See all coins</Text>
          <Ionicons name="chevron-forward-outline" color="#fff" size={20}/>
        </TouchableOpacity> */}
      </View>
    
      <FlatList
        data={popularDistricts}
        renderItem={({ item }) => (
            <PopularDistricts
              item={item}
              handleCardPress={handleCardPress}
            />
          
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ gap: 15}}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
      
    </SafeAreaView>
  )
}

export default GlobalScreen


const styles = StyleSheet.create({
  sectionHeader: {
    color: '#fff', 
    fontSize: 16, 
    // fontWeight: 700,
    fontFamily: FONT.neueUltrabold,
    // fontFamily: FONT.medium,
    marginVertical: 10,
  },
  safeAreaViewWrapper: {
    flex:1, 
    // backgroundColor: '#7b00ff'
    backgroundColor: '#212244', 
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
