import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { AntDesign, Ionicons } from '@expo/vector-icons'

export default function SearchBar() {
  return (
    <View style={{marginTop:15, flexDirection:"row"}}>
      <GooglePlacesAutocomplete 
      placeholder="Search"
      styles={{
        textInput:{
            backgroundColor:"#eee",
            borderRadius:20,
            fontWeight:"700",
            marginTop:7,
        },
        textInputContainer:{
            backgroundColor:"#eee",
            borderRadius:50,
            flexDirection:"row",
            alignItems:"center",
            marginRight:10,
        },
      }}

      renderLeftButton={() => (
        <View 
        style={{
            marginLeft:10
        }}>
            <Ionicons name='location-sharp' size={24}/>
        </View>
      )}

      renderRightButton={() =>(
        <View 
        style={{
            marginRight:10,
            flexDirection:"row",
            backgroundColor:"white",
            padding:9,
            borderRadius:30,
            alignItems:"center"
        }}>
            <AntDesign name='clockcircle' size={11} style={{marginRight:6}}/>
            <Text>Search</Text>
        </View>
      )}
      />
    </View>
  )
}

