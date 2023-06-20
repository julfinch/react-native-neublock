import React from 'react'
import { StyleSheet, Image,  View, Text } from 'react-native'


const AssetCard = ({ token, amount, price }) => {
    const getImageTitle = (token) => {
        const imageTitles = {
        apecoin: 'apecoin',
        aptos: 'aptos',
        arbitrum: 'arbitrum',
        binance: 'binance',
        bitcoin: 'bitcoin',
        cardano: 'cardano',
        ethereum: 'ethereum',
        litecoin: 'litecoin',
        optimism: 'optimism',
        polkadot: 'polkadot',
        polygon: 'polygon',
        solana: 'solana',
        sui: 'sui',
        tron: 'tron',
        xrp: 'xrp',
        };
    
        return imageTitles[token.toLowerCase()] || '';
    };
    
    const imageTitle = getImageTitle(token);
    console.log(imageTitle)

    return (
        <View style={styles.container}>
            <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2px'}}>
                <Text style={{color: '#fff'}}>{amount} {token}</Text>
                <Text style={{color: '#fff'}}>AVERAGE PRICE:$ {price}</Text>
            </View>
            <View>
            {/* {imageTitle && <img style={styles.assetsImage}  src={`/src/assets/images/crypto_icons/${imageTitle}.png`} alt={imageTitle} />} */}
            <Image
                source={{
                    uri: "https://res.cloudinary.com/dwxdztigp/image/upload/v1687273090/neublock/crypto-icons/litecoin.png",
                  }}
                resizeMode='contain'
                style={{height: 40, width: 40, borderRadius: 50,borderColor:'#fff',borderWidth: 1, marginBottom: 10}}
            />
            </View>
        </View>
    )
}

export default AssetCard


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2A2B54',
        height: 60,
        marginVertical: 4,
        paddingHorizontal: 14,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#32385E',
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 0.4,
    },
    assetsImage: {
        width: 40,
        marginTop: -10,
    },
    // assets-card-add-button{
    // background: var(--bgTertiary) !important;
    // box-shadow: 0.5px 15.5px 14px 1px #131427 !important;
    // border-radius: 10px !important;
    // color: #fff !important;
    // font-size: 10px !important;
    // font-weight: 400 !important;
    // line-height: 0.4 !important;
    // display: flex;
    // flex-direction: row;
    // justify-content: center;
    // padding: 15px;
    // align-items: center;
    // },
  });
  