import React from 'react'
import { SafeAreaView, View } from 'react-native'
import Timer from '../../components/Timer/Timer'

export default () => {
  return (
    // <SafeAreaView>
      <View style={{ backgroundColor: "#fff", flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Timer />

      </View>
    // </SafeAreaView>
  )
}