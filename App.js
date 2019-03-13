import React, { Component } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import LoginPage from "./src/LoginPage"

class App extends Component {
  render() {
    const dataProfile = {
      nama: 'DEF',
      city: 'Bandung'
    }

    return <LoginPage nama={"ABC"} city={"Jakarta"} test={8} profile={dataProfile} />
  }
}

export default App

// // jsx
// class App extends Component {
//   // optional
//   constructor(props) {
//     super(props)

//     const nama = "ABC"
//     this.state = {
//       // optional
//       nama: "FGH",
//       cars: ['honda', 'toyota']
//     }
//     console.log(nama)
//   }

//   // Lifecycle - optional
//   componentDidMount() {
//     // console.log(nama) // wrong
//     console.log(this.state.nama) // correct
//     console.log(this.state.cars) // correct
//   }

//   render() {
//     // Must have
//     // console.log(nama) // wrong
//     console.log(this.state.nama) // correct
//     console.log(this.state.cars) // correct

//     return (
//       <View style={{ marginLeft: 15 }}>
//         <Text style={{ fontSize: 25, color: "red", marginBottom: 10 }}>
//           Hello, {this.state.nama}
//         </Text>
//         <TextInput
//           onChangeText={(txt) => this.setState({ nama: txt }) }
//           placeholder={"Please type your name"}
//           style={{
//             backgroundColor: "#EFEFEF",
//             borderColor: "#000",
//             borderWidth: 1,
//             borderRadius: 5,
//             width: "90%"
//           }}
//         />
//         <TouchableOpacity
//           style={{ backgroundColor: "green", width: "90%" }}>
//           <Text
//             style={{
//               fontSize: 20,
//               margin: 5,
//               color: "white",
//               fontWeight: "bold",
//               textAlign: "center"
//             }}
//           >
//             Submit
//           </Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

// export default App
