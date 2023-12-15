import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = ({ navigation }) => {
	return (
		<View>
			<Text>Login Page</Text>
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

const styles = StyleSheet.create({});

export default Login;
