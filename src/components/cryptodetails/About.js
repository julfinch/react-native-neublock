import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import HTMLReactParser from 'html-react-parser';


const About = ({about}) => {
  return (
    <View>
      <Text style={styles.tabTile}>What is {about?.name} ?</Text>
      <Text style={styles.tabDesc}>{HTMLReactParser(about?.description)}</Text>
      <View style={styles.statWrapper}>
      {about?.links.map(({ name, url, type, index }) => (
              <View style={styles.statRow} key={type + index}>
                <View style={styles.statLeft}>
                  <Text style={styles.title}>{type}</Text>
                </View>
                {/* <Text style={styles.statRight}>{type}</Text> */}
                <Text href={url} target="_blank" rel="noreferrer" style={styles.link}>{url}</Text>
              </View>
            ))}
      </View>
    </View>
  )
}

export default About

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
    textTransform: 'capitalize',
  },
  
  statLeft: {
    flexDirection: 'row',
    gap: 6,
  },
  statRight: {
    color: '#fff',
  },
  link: {
    color: '#fff',
  }
});
