import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Value = ({stats, coin}) => {
  return (
    <View>
      <Text style={styles.tabTile}>{coin?.name} Value Statistics</Text>
      <Text style={styles.tabDesc}>An overview showing the statistics of {coin?.name}, such as the base and quote currency, the rank, and trading volume.</Text>
      <View style={styles.statWrapper}>
      {stats.map(({ icon, title, value, index }) => (
              <View style={styles.statRow} key={title + index}>
                <View style={styles.statLeft}>
                  <Text>{icon}</Text>
                  <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={styles.statRight}>{value}</Text>
              </View>
            ))}
      </View>
    </View>
  )
}

export default Value

const styles = StyleSheet.create({
  tabTile: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 800,
    marginBottom: 4,
  },
  tabDesc: {
    color: '#fff',
    fontSize: 10,
    marginBottom: 17,
  },
  statWrapper: {
    borderRadius: 10,
    borderColor: '#32385E',
    borderWidth: 1,
    backgroundColor: '#2A2B54', 
    overflow: 'hidden', 
    paddingBottom: -1,
  },
  statRow: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingVertical: 11,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#32385E',
    marginBottom: -1,
  },
  title: {
    color: '#fff',
  },
  
  statLeft: {
    flexDirection: 'row',
    gap: 6,
  },
  statRight: {
    color: '#fff',
  },
});
