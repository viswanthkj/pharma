import React from 'react';
import {
  View,
  Image
} from 'react-native';
import Logo from '../images/logo.png'


const Header = () => {
    return (
        <View style={{ height: 80, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} >
          {/* <Text>hi</Text> */}
          <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={Logo}
      />
        </View>
    )
}

export default Header