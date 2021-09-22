
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../components/Main';
import FullInfo from '../components/FullInfo';



const Stack = createNativeStackNavigator();

let homeOptions = (
	{
		title: 'homes',
		headerTitleStyle: { color: 'red', fontFamily: 'open-boldG', fontSize: 26 },
		headerStyle: { backgroundColor: '#000' },
	}
)

export default function Navigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" options={ homeOptions } component={ Main } />
				<Stack.Screen name="FullInfo" component={ FullInfo } />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
