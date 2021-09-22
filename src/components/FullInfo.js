import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FullInfo({route}) {
	return (
		<View>
			<Text>{ route.params.name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({})
