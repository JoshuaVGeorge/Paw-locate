import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const LoginForm = () => {
	return (
		<View style={styles.container}>
			<TextInput style={styles.input} placeholder="Username" />
			<TextInput style={styles.input} placeholder="Password" />
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
});

export default LoginForm;
