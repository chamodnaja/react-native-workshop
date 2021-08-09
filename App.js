import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Education from './components/education'
export default function App(){
  return(
    <>
      <View style={styles.container}>
        <View style={styles.boxImage}>
          <Image style={[styles.profileImage,{marginRight: 5}]} source={require('./assets/images/cat.jpg')}/>
          <Image style={styles.profileImage} source={{uri: 'https://i.ibb.co/YNTj9Gb/puppy.jpg'}}/>
        </View>
        <Text style={styles.fontStyle}>Hello World!</Text>
        <Text style={styles.fontDesc}>Chanat  Chumchan</Text>
        <Education />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  boxImage:{
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'row'
  },
  profileImage:{
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 5,
    borderColor: 'red',
  },
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'column'
  },
  fontStyle: {
    color: 'blue', 
    fontSize: 26
  },
  fontDesc: {
    color: 'green', 
    fontSize: 22
  },
})