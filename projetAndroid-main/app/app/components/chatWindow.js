import React from 'react';
import { View, Button, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

export default () =>{
  return(
    <View style={styles.window}>
      <View style={styles.body}>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.6} style={styles.pre}>
          <Feather name="user" size={20} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.inputArea}>
          <Feather name="user" size={20} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.pos}>
          <Feather name="user" size={20} color="#fff"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  window:{
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#008B8B',
  },
  body:{
    flex: 1,
    overflow: 'auto',
  },
  footer:{

  },
  pre:{

  },
  inputArea:{

  },
  pos:{

  },
})