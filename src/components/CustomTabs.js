import React from "react";
import { StyleSheet, TouchableOpacity, FlatList, Text, View } from "react-native";

function TabButton({ tabs, name, activeTab, onHandleSearchType }) {
    return (
        <TouchableOpacity
        style={styles.btn(tabs, name, activeTab)}
        onPress={onHandleSearchType}
        >
            <Text style={styles.btnText(tabs, name, activeTab)}>{name}</Text>
        </TouchableOpacity>
    );
}

const CustomTabs = ({ tabs, activeTab, setActiveTab }) => {
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
                tabs={tabs}
                onHandleSearchType={() => setActiveTab(item)}
            />
            )}
        contentContainerStyle={{ width: '100%', justifyContent: 'space-between', borderRadius: 10, backgroundColor: '#3d3652' }}
        keyExtractor={(item) => item}
    />
    </View>
    );  
};

export default CustomTabs;

const styles = StyleSheet.create({
    container: {
    },
    btn: (tabs, name, activeTab) => ({
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 12,
        backgroundColor: name === activeTab ? "#7b00ff" : "#3d3652",
        borderRadius: 10,
        minWidth: tabs.length > 2 ? '33%' : '50%',
        maxHeight: '100%',
        // shadowOffset: {
        // width: 5,
        // height: 2,
        // },+
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