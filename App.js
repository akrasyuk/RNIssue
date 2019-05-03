import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from './Images'
import styles from './Images/styles.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.caption}>Image</Text>
            <Image style={styles.imageBox} source={images.img} />
      </View>
    );
  }
}
