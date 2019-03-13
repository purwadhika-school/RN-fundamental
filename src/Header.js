import React, { Component } from "react"
import { View, Text } from "react-native"

class Header extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to My Apps</Text>
        <Text>{this.props.dataColor}</Text>
      </View>
    )
  }
}

export default Header
