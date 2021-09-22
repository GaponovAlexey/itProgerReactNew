import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
export default function FullInfo({ route }) {
	return (
		<View>
			<Image
				style={ styles.img }
				source={ {
					uri: route.params.img
				} } />
			<Text style={ styles.name } >{ route.params.name }</Text>
			<Text style={ styles.fulls } >{ route.params.full }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	name: {
		textAlign: 'center',
		fontFamily: 'Gluten',
		fontSize: 25,
		marginTop: 25,
	},
	fulls: {
		fontFamily: 'Bold',
		textAlign: 'center',
	},
	img: {
		width: 300,
		height: 300,
		alignSelf: 'center',
	}
})
