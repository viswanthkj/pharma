import React from 'react';
import {
  View,
  Text
} from 'react-native';
import moment from "moment";

const ListItem = ({ item, index }) => {
  return (
    <View style={{ 
        height: 150,
        backgroundColor: '#FFF',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
        padding: 10,
        marginHorizontal: 20
    }}>
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        // paddingHorizontal: 5
        }}>
      <Text
       style={{
         fontSize: 16,
         color: '#000',
         fontWeight: 'bold'
       }}
       numberOfLines={1}
       ellipsizeMode='tail'
      >{item.name}</Text>
      <Text
      style={{
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
      }}
      numberOfLines={1}
      ellipsizeMode='tail'
      >{moment(item.released).format('DD/MM/YYYY')}</Text>
      </View>
      <Text
         style={{
          fontSize: 14,
          color: '#000',
          marginVertical: 5
        }}
        numberOfLines={1}
        ellipsizeMode='tail'
      >{item.diseases.toString()}</Text>
      <Text
       style={{
        fontSize: 14,
        color: '#000',
        marginTop: 5
      }}
      numberOfLines={4}
      ellipsizeMode='tail'
      >{item.description}</Text>
    </View>
  )
}

export default ListItem