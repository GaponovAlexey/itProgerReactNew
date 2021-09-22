import { Formik } from 'formik'
import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'



export default function Form({ addArtical }) {
	return (
		<View>
			<Formik
				initialValues={ { name: '', anons: '', full: '', img: '' } }
				onSubmit={ (values, action) => { 
					addArtical(values)
					action.resetForm('')
				} }
			>
				{
					(props) => (
						<View>
							<TextInput
								value={ props.values.name }
								placeholder='can your name'
								onChangeText={ props.handleChange('name') } />
							<TextInput
								value={ props.values.anons }
								multiline
								placeholder='can your anons'
								onChangeText={ props.handleChange('anons') } />
							<TextInput
								value={ props.values.full }
								multiline
								placeholder='create '
								onChangeText={ props.handleChange('full') } />
							<TextInput
								value={ props.values.img }
								placeholder='foto'
								onChangeText={ props.handleChange('img') } />
							<Button title='send' onPress={ props.handleSubmit } />
						</View>
					)
				}
			</Formik>
		</View>
	)
}

const styles = StyleSheet.create({})
