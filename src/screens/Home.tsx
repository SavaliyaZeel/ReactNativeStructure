import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {getDataWatcher} from '../store/action';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {getData} = useSelector((state: any) => ({
    getData: state.getDataReducer.getData,
  }));
  
  useEffect(() => {
    console.log(getData);
  }, [getData]);
  
  useEffect(() => {

  }, [])
  

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          dispatch(getDataWatcher());
        }}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const HomeScreen = () => {
//   return (
//     <View>
//       <Text>HomeScreen</Text>
//     </View>
//   )
// }

// export default HomeScreen