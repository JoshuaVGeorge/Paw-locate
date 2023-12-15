import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";

const CreateAccountForm = () => {
	return (
		<View style={styles.container}>
			<TextInput
				style={[styles.input, styles.username]}
				placeholder="Username"
				maxLength={40}
			/>
			<View style={styles.input__btm}>
				<TextInput
					style={[styles.input, styles.password]}
					placeholder="Password (max characters 20)"
					maxLength={20}
					secureTextEntry
				/>
				<TextInput
					style={[styles.input, styles.password]}
					placeholder="Confirm Password"
					maxLength={20}
					secureTextEntry
				/>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text>Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		marginBottom: 30,
	},
	input: {
		height: 40,
		borderWidth: 2,
		padding: 10,
	},
	input__btm: {
		marginBottom: 30,
	},
	username: {
		marginBottom: 50,
	},
	password: {
		marginBottom: 10,
	},
	button: {
		alignSelf: "flex-end",
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderWidth: 2,
	},
});

export default CreateAccountForm;
