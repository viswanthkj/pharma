import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput
} from 'react-native';
import ListItem from './ListItem';


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
            const itemData = item.name
              ? item.name.toLowerCase()
              : ''.toLowerCase();
            const textData = text.toLowerCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setKeyword(text);
      } else {
        setFilteredDataSource(masterDataSource);
        setKeyword(text);
  };
}

    const renderListItem = ({ item, index}) => {
      return (
        <ListItem
           item={item}
           index={index}
        />
      )
    }

    const dataLength = filteredDataSource ? filteredDataSource.length : 0
    return (
      <FlatList
        data={filteredDataSource}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
        <View
         style={{ 
           backgroundColor: '#f5f5f5'
        }}
        >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          value={keyword}
          onChangeText={text => handleSearch(text)}
          placeholder="Search"
          style={{ 
            backgroundColor: '#fff', 
            paddingHorizontal: 20,
            marginVertical: 10,
            marginHorizontal: 20,
            borderRadius: 10 
          }}
        />
        <Text style={{
          fontSize: 16,
          color: '#000',
          fontWeight: 'bold',
          marginHorizontal: 20,
          marginVertical: 10,
        }}
        >{`showing ${dataLength} results`}</Text>
        </View>
        }
        keyExtractor={(item, index) => item.id}
        renderItem={renderListItem}
        style={{ backgroundColor: "#f5f5f5" }}
        stickyHeaderHiddenOnScroll
        showsVerticalScrollIndicator={false}
      />
  )
}

export default List