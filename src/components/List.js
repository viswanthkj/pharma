import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StyleSheet
} from 'react-native';
import ListItem from './ListItem';
import { Icon } from 'react-native-elements';

const List = ({ data }) => {
  const [keyword, setKeyword] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setFilteredDataSource(data);
    setMasterDataSource(data);
  }, []);


  const handleSearch = text => {
      if (text) {
        const newData = masterDataSource.filter((item) => {
          if(item.name || item.diseases.length > 0) {
          return item.name.toLowerCase().includes(text) ||
           item.diseases.includes(text.toLowerCase())
         }
        });
        setFilteredDataSource(newData);
        setKeyword(text);
      } else {
        setFilteredDataSource(masterDataSource);
        setKeyword(text);
  };
}

    const renderListItem = useCallback(({ item, index}) => {
      return (
        <ListItem
           item={item}
           index={index}
        />
      )
    },[])

    const dataLength = filteredDataSource ? filteredDataSource.length : 0
    return (
      <FlatList
        data={filteredDataSource}
        stickyHeaderIndices={[0]}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
        <View
         style={styles.headerContainer}
        >
        <View style={styles.headerSubContainer}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          value={keyword}
          onChangeText={text => handleSearch(text)}
          placeholder="You can search by drug name or disease"
          style={styles.textInputContainer}
        />
        <TouchableOpacity style={styles.iconContainer}
        onPress={() =>{
          Keyboard.dismiss()
          setKeyword('')
          setFilteredDataSource(masterDataSource);
        }}
        >
          <Icon
            name='closecircleo'
            type='antdesign'
            color='#000'
          />
        </TouchableOpacity>
        </View>
        <Text style={styles.numOfResults}
        >{`Showing ${dataLength} results`}</Text>
        </View>
        }
        keyExtractor={(item, index) => item.id}
        renderItem={renderListItem}
        style={styles.flatListContainer}
        stickyHeaderHiddenOnScroll
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyComponentContainer}>
            <Text style={styles.emptyText}>Please try exact or some other keywords</Text>
          </View>
        }
        maxToRenderPerBatch={5}
        initialNumToRender={10}
        windowSize={5}
      />
  )
}


const styles = StyleSheet.create({
  headerContainer: { 
    backgroundColor: '#f5f5f5',
  },
  headerSubContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 2,
    borderRadius:10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  textInputContainer: { 
    flex:1,
    backgroundColor: '#fff', 
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numOfResults: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  flatListContainer: { backgroundColor: "#f5f5f5" },
  emptyComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  },
  emptyText:{
    fontSize: 18,
    color: '#000',
  }
})

export default List