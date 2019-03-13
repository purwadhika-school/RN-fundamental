import React, { Component, Fragment } from 'react'
import { View, Text } from 'react-native'
import Header from './Header'
import FormBody from './FormBody'

class LoginPage extends Component {
  testFunction = () => {
    console.log('lalala')
  }

  render() {
    console.log(this.props)
    const color = 'red'

    return (
      <Fragment>
        <Text>{this.props.nama}</Text>
        <Text>{this.props.profile.city}</Text>

        <Header dataColor={color} />
        <FormBody dataColor={color} nama="Lalala" dataFunction={this.testFunction} />
      </Fragment>
    )
  }
}

export default LoginPage