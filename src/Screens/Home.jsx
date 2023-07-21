import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import categories from '../Data/categories.json'
import Card from '../Components/Card'

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
            data ={categories}
            keyExtractor={category => category}
            renderItem={({item}) => {
                return (
                    <Card>
                        <Text>{item}</Text>
                    </Card>
                )
            }}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        height: '90%',
        backgroundColor: colors.neonlight,
    }

})