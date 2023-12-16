import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";
import { API_URL } from "@env";
import axios from "axios";

const LoginForm = () => {
	const [usernameValue, setUsernameValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");

	const submitForm = () => {
		const formData = { user_name: usernameValue, password: passwordValue };
		axios
			.post(`${API_URL}/profile`, formData)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Username"
				maxLength={40}
				value={usernameValue}
				onChangeText={(text) => setUsernameValue(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				maxLength={20}
				secureTextEntry
				value={passwordValue}
				onChangeText={(text) => setPasswordValue(text)}
			/>
			<TouchableOpacity style={styles.button} onPress={submitForm}>
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
