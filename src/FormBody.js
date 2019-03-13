import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'

const FormBody = ({ dataColor, nama, dataFunction }) => {
  return (
    <View>
      <Text>{dataColor}</Text>
      <Text>{nama}</Text>
      <TextInput placeholder="email" />
      <TextInput placeholder="password" />
      <TouchableOpacity
        onPress={dataFunction()}
        >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const penjumlahan = () => {
  
}

export default FormBody