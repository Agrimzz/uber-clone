import { View, Text } from "react-native"
import React from "react"
import { GoogleInputProps } from "@/types/type"

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  handlePress,
  textInputBackgroundColor,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row  items-center justify-center relative z50 rounded-xl ${containerStyle} mb-5`}
    >
      <Text>Search</Text>
    </View>
  )
}

export default GoogleTextInput
