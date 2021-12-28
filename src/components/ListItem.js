import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import moment from "moment";

const ListItem = ({ item }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
      <Text
       style={styles.titleText}
       numberOfLines={1}
       ellipsizeMode='tail'
      >{item.name.toUpperCase()}</Text>
      <Text
      style={styles.dateText}
      numberOfLines={1}
      ellipsizeMode='tail'
      >{moment(item.released).format('DD/MM/YYYY')}</Text>
      </View>
      <Text
         style={styles.diseaseText}
        numberOfLines={2}
        ellipsizeMode='tail'
      ><Text style={{ fontWeight: 'bold'}}>Diseases : </Text>{item.diseases.toString()}</Text>
      <TouchableOpacity onPress={()=> setToggle(!toggle)}>
        <Text
        style={styles.description}
        numberOfLines={toggle ? null : 4}
        ellipsizeMode='tail'
        >{item.description}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: { 
    minHeight: 200,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    marginHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
},
  titleContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#efefef',
    paddingBottom: 5
    // paddingHorizontal: 5
    },
    titleText:{
      fontSize: 16,
      color: '#000',
      fontWeight: 'bold'
    },
    dateText:{
      fontSize: 12,
      color: '#000',
      fontWeight: 'bold'
    },
    diseaseText:{
      fontSize: 16,
      color: '#000',
      marginVertical: 5,
    },
    description: {
      fontSize: 16,
      color: '#000',
      marginVertical: 10,
      borderWidth: 3,
      borderColor: '#efefef',
      padding: 10
    }
})

export default ListItem