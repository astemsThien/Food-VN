import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems from '../components/home/RestaurantItems'

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor:"#eee", flex:1}}>
        <View style={{backgroundColor:"white", padding:15,}}>
            <HeaderTabs />
            <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems />
        </ScrollView>
    </SafeAreaView>
  )
}