import React, { useEffect, useState } from 'react'
import { Alert, Button, FlatList, Image, ImageBackground, Modal, SafeAreaViewComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Form from './Form';

export default function Main({ navigation }) {

	const [news, setNews] = useState([
		{ name: 'Google', andons: 'Google new okulus!!!', full: 'Google best company', key: '1', img: 'https://free-png.ru/wp-content/uploads/2020/11/b64cc812d68e951149b3e1a21c9a49e7-35dd74d8.png' },
		{ name: 'Apple', andons: 'Apple new macbook!!!', full: 'Apple best company', key: '2', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1724px-Apple_logo_black.svg.png' },
		{ name: 'Yandex', andons: 'Yandex new dron!!!', full: 'Yandex best company', key: '3', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Yandex_Browser_logo.svg/512px-Yandex_Browser_logo.svg.png' },
		{ name: 'GoletsGo', andons: 'GoletsGo new sity !!!!!', full: 'GoletsGo best company', key: '4', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO8AAADTCAMAAABeFrRdAAAAYFBMVEX///8ArNcAqNUAp9UAqtYApdSDy+Wf2eyp3O75/v/u+fzl9frz+/2+5fKu3++R0+nR7fbD5/Pa8fhHu96N0ukqtNtXv+BrxuO44vFcweE3t9zI6fTi9Pp7y+UOr9is3e4UroosAAAGuElEQVR4nO2c2ZaiMBCGJYsoqNAg4ga+/1sOKN0CqZBFxbn4v4s5Z85oWUUlldTCLBYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAaJ0tT8d8vM5z0/V6hL5S1pvNuv36fUJ4ltVMM6YEEGDEKz5yzm5OkpZp7ukzIu6ERDURb7cZR9R9lXisJCdpQOYLG7Wftpsq1q2Tyz4fWbtQ+OH3eaTqnvwc+BMtbWDi9BGxjXMOS2lMbpMP22CA8eCa4196FvvjDJyzqZE8PP/YvG2nra2U3dqH69DwU0iAnmIZ7NJT3wwW/uweKWVsQumXPsUwaz2xUcJ7axt4RUtIjtby+D5dwPXJjcvwyfsQMnYSwcRIvjm6ZTV1s7VGRydrZby02D28wVDH/xIN3Mbg8uRiIw4sQ1IY6j/ECuXtdzBhxHnx37392Rsv2Ju6GFu453+KXp02bpP2Df28M5PV1G/bG4TtOaP0j9e3m1gy18RF18RgcjnNjfz1jXg3S0p1l+4zTL0d5ePsAn8dRWnh4zaW0IrZN4VfdAemqJJ33j7h/6ByPtN+qQ/d8VdCL/nhbqPLE0qmsmqpYGqC4yJbjULXiSX1px1Gp51+Y5oD2HtYdbYGpS7NI6u6bHSZyLy5dpHxIx0sfWq0VXwsn9SxBXlH8Hkufk3rYg66ctIT7oPJq/aWzChpdOlOzvPtAo8H6d80WGobeM7Ua5ae3Lab7w+jtVKC3KZ9M81L8K6aKlV/n6iuxtpliKjYub++VnGWR52vrvRIjiZ75Xkh/nlRYNtWZOxmRV0Pn/f6qK1Nbn8bbk16V1WaPL5PWUw02SXbyeh1hfLdfFjKbksqu3g/NiTIk7anyyJz4vinUbpWZO6kpntg912XITeOJrbRAxiQfB5qjsh9azPTiL2VNievCJeiR9l86RJVIrP3NoIlLmGC1OlGsz2zrqfpD2ddCpP4MohMsmREmGoWsRqKiWmNgAJGfc0/J69J9U5rtkKcfaKif3ffUlVyW0Ttemn4TrFe7DHd6iThI8K4ddVOAn1NI0ZPBU2XO297QYcR2z7dKcrtZxH7v0xPUZVgtm91B2WO9rrA3FystvwI441y7vm5prjWv2W/JCNfYirsxxG1p1PJcDilwvlMfIZ2sNExWkUNjzcK8ZVWgr1Sc9gL1HGGd1jfdzLbM4zNUC/az1HKxV9uBqlReqyM2OOzqTgd8WrgishVXZOJE6FYazZ+uxeG0ep1/aXM+AOKjf9bUQSudEwD9WUAgxYaJWqkeNNRdlemePp326HLQl7+7eN1Me9Vo5SV5Z4UwK8aYjGLPT29v178CrTCgutVMlzNL8Je/tpma4KZ8Bi/26I69UMBR3ietUvFJJ1CzMW8ZkIlGyG6wYRr/pp2UQNfQqy0jeEuMW4pkc+rKg6w/Of08AmO1AfmTHSEu59vQBtAdXSG7Sf1wpU6UkRYShFxcRT465zij5QnYXpZM5qS5tKM9Qzm2M5LxZUAJ4KlBe7ljabdDBVjrXY8++Auj9NVIJjy3GUyR1ckeX299tGQRzAE/lcRPV4yQU+0S0g2ykexUkv6DEGTv96RjZe6B2tEbHY5OQTFjONgpPdhUZbysM3sh2aU+VnnYjFjt4QdGPtExD12LvXlPHXjB41lBlVO7+LKJSB3/hAX1Dn6h0tJoZqhr3u9ETP3rVJTaaL2fIwsDgrdd19OeMotLY+JXhR3S7Xa3ZZaecQRN3uO22S3Io4XjfNtokviX6GfLZWaIumVX1XlzEuZTuTr9P0kSxPDF61Itovs4nXAxy7c6/iUYD8M7e782qmGewQ4oWXfDzwKlHd+esS6wZerBi3bz6OZ9bXRNW/Q1M70GRhrlsz8g14D9f11qH3iuY3vWKfwjIJGNPPCSL3Oe878gvmeo0+i2CYAmU+m0LI2RfzA5dO+UPTepzxeQwUCzHXzJUCmaPpYWf1fu88y8+KeQ+iAYmLtvSbR6nTkhZ0QjEbW+txbaHr/8W1vcVMfOctjSeR3btWgh/0y7CyXCVCVv/BG7GhudraZACTswoXGxc3j2yOYqSZqJx+40rw2nRerpOJKfY7bJQmfpVrqU1kBOO5zXG5SQL9qhacVf/X++xR0iS7Y32FYLLYWy/CW86IHPI+2f+lC8YkaZK3/00B++0Zc16UN7fp1ejYe3H/IWMwMf3fkW3DZVWeymoZbj0XYHQJl2VeFOdTtV9d/o8IBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAzz8a81OXjMtSTAAAAABJRU5ErkJggg==' },
	])
	const [visib, setVisib] = useState(false)

	const addArtical = (article) => {
		setNews(prev => {
			[...prev,
				article,
			article.key = Date.now().toString()]
		}),
		setVisib(false)

	}

	return (
		<View>
			<View>
				<Modal visible={ visib }
					transparent={ true }

				>
					<View >
						<Text style={ styles.title } >Add form</Text>
						<Form addArtical={ addArtical} />
					</View>
					<AntDesign
						onPress={ () => setVisib(false) }
						name="closecircle" size={ 24 } color="black" style={ styles.iconAdd } />
				</Modal>
			</View>
			<Text style={ [styles.title, styles.header] } >Home Page</Text>
			<AntDesign
				onPress={ () => setVisib(true) }
				name="addfile" size={ 34 } color="black" style={ { alignSelf: 'flex-end', paddingRight: 15, } } />
			<FlatList
				style={ styles.cont }
				data={ news }
				keyExtractor={ item => item.key }
				renderItem={ ({ item }) => (
					<TouchableOpacity
						style={ styles.item }
						onPress={ () => navigation.push('FullInfo', item) }
					>
						<Image style={ styles.img } source={ { uri: item.img } } />
						<Text style={ styles.title } >{ item.name }</Text>
						<Text style={ styles.anons } >{ item.andons }</Text>
					</TouchableOpacity>
				)
				}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	iconAdd: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
		alignSelf: 'center',
	},
	cont: {
		height: 650,
	},
	header: {
		marginBottom: 20,
	},
	item: {
		width: '100%',
		marginBottom: 30,
		alignItems: 'center'


	},
	title: {
		backgroundColor: 'rgba(0,0,0,0.1)',
		elevation: 5,
		borderRadius: 15,
		fontFamily: 'Bold',
		fontSize: 24,
		textAlign: 'center',
		marginTop: 20,
	},
	anons: {
		backgroundColor: 'rgba(0,0,0,0.1)',
		elevation: 5,
		borderRadius: 15,
		fontFamily: 'Bold',
		fontSize: 16,
		textAlign: 'center',
		marginTop: 5,
	},
	img: {
		width: 100,
		height: 100,
	},

})
