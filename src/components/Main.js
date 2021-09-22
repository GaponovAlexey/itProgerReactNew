import React, { useState } from 'react'
import { Button, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Main({ navigation }) {

	const [news, setNews] = useState([
		{ name: 'Google', andons: 'Google new okulus!!!', full: 'Google best company', img: require('../../assets/img/g.png') },
		{ name: 'Apple', andons: 'Apple new macbook!!!', full: 'Apple best company', img: require('../../assets/img/a.png') },
		{ name: 'Yandex', andons: 'Yandex new dron!!!', full: 'Yandex best company', key: '3', img: require('../../assets/img/y.jpg') },
		{ name: 'GoletsGo', andons: 'GoletsGo new sity !!!!!', full: 'GoletsGo best company', img: require('../../assets/img/go.png') },
	])
	return (
		<View>
			<FlatList
				data={ news }
				keyExtractor={ item => item.name }
				renderItem={ ({ item }) => (
					<TouchableOpacity
						onPress={ () => navigation.push('FullInfo', item) }
					>
						<Image height='100' width='100' source={ item.img  } />
						<Text >{ item.name }</Text>
					</TouchableOpacity>
				)
				}
			/>
		</View>
	)
}

const styles = StyleSheet.create({})
