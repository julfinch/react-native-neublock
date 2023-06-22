import { View } from 'react-native'
import React from 'react'
import AssetCard from '../cards/AssetCard'

const CoinAssets = ({ assets }) => {
    return (
        <View style={{marginTop: 10}}>
            {assets?.map((asset) => (
                <AssetCard
                token={asset.token}
                key={asset._id}
                amount={asset.amount}
                price={asset.price}
                />
            ))}
        </View>
    )
}

export default CoinAssets