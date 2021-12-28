import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text
} from 'react-native';


const SearchInput = ({ onChangeText }) => {
  return (
    <View 
    style={{ height: 50, width: '100%', borderWidth: 1}}
    >
      <TextInput
          onChangeText={onChangeText}
      />
    </View>
  )
}

export default SearchInput