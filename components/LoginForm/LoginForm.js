import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";

const LoginForm = () => {
	return (
		<View style={styles.container}>
			<TextInput style={styles.input} placeholder="Username" maxLength={40} />
			<TextInput
				style={styles.input}
				placeholder="Password"
				maxLength={20}
				secureTextEntry
			/>
			<TouchableOpacity style={styles.button}>
				<Text>Login</Text>
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
		marginBottom: 30,
	},
	button: {
		alignSelf: "flex-end",
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderWidth: 2,
	},
});

export default LoginForm;
