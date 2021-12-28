import React from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import Logo from '../images/logo.png'


const Header = () => {
    return (
        <View style={styles.headerContainer} >
          <Image
            style={styles.logoImage}
            source={Logo}
          />
        </View>
    )
}

const styles = StyleSheet.create({
  headerContainer: { 
      height: 80, 
      backgroundColor: '#fff', 
      justifyContent: 'center', 
      alignItems: 'center'
  },
  logoImage: {
    width: 50,
    height: 50,
  }
})

export default Header