import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";
import axios from "axios";
import { API_URL } from "@env";
import { useNavigation } from "@react-navigation/native";

const CreateAccountForm = () => {
	const navigation = useNavigation();

	const [usernameValue, setUsernameValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

	const submitForm = () => {
		if (usernameValue.length < 3 || passwordValue.length < 5) {
			Alert.alert(
				"Username must be at least 3 chars Password must be at least 5 chars"
			);
		} else if (passwordValue !== confirmPasswordValue) {
			Alert.alert("Passwords do not match");
		} else {
			const formData = { user_name: usernameValue, password: passwordValue };

			axios
				.post(`${API_URL}/signup`, formData)
				.then(() => {
					Alert.alert("Account created");
					navigation.navigate("Login");
				})
				.catch((err) => {
					Alert.alert("Account already exists");
				});
		}
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={[styles.input, styles.username]}
				placeholder="Username"
				maxLength={40}
				value={usernameValue}
				onChangeText={(text) => setUsernameValue(text)}
			/>
			<View style={styles.input__btm}>
				<TextInput
					style={[styles.input, styles.password]}
					placeholder="Password (max characters 20)"
					maxLength={20}
					value={passwordValue}
					onChangeText={(text) => setPasswordValue(text)}
					secureTextEntry
				/>
				<TextInput
					style={[styles.input, styles.password]}
					placeholder="Confirm Password"
					maxLength={20}
					value={confirmPasswordValue}
					onChangeText={(text) => setConfirmPasswordValue(text)}
					secureTextEntry
				/>
			</View>
			<TouchableOpacity style={styles.button} onPress={submitForm}>
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
