import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, FlatList, Text, View } from "react-native";

function TabButton({ name, activeTab, onHandleSearchType }) {
    return (
        <TouchableOpacity
        style={styles.btn(name, activeTab)}
        onPress={onHandleSearchType}
        >
            <Text style={styles.btnText(name, activeTab)}>{name}</Text>
        </TouchableOpacity>
    );
}

const CryptoTabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
    <View style={styles.container}>
        <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
            <TabButton
                name={item}
                activeTab={activeTab}
                onHandleSearchType={() => setActiveTab(item)}
            />
            )}
        contentContainerStyle={{ width: '100%', justifyContent: 'space-between', padding: 2, borderRadius: 10, backgroundColor: '#2A2B54' }}
        keyExtractor={(item) => item}
    />
    </View>
    );  
};

export default CryptoTabs;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    },
    btn: (name, activeTab) => ({
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 0,
        backgroundColor: name === activeTab ? "#7b00ff" : "#3d3652",
        borderRadius: 10,
        shadowColor: "#000",
        width: 90,
        // shadowOffset: {
        // width: 5,
        // height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 5.84,
        // elevation: 5,
        // shadowColor: '#fff',
    }),
    btnText: (name, activeTab) => ({
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: 12,
        color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    }),

});