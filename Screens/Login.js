import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>PAW LOCATE</Text>
			<LoginForm />
			<Button
				title="create account"
				onPress={() => navigation.navigate("CreateAccount")}></Button>
			<Button
				title="Profile"
				onPress={() => navigation.navigate("Profile")}></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 40,
		justifyContent: "center",
	},
	title: {
		fontSize: 50,
		paddingBottom: 50,
		textAlign: "center",
	},
});

export default Login;
