import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CreateAccount = ({ navigation }) => {
	return (
		<View>
			<Text>Create Account</Text>
			<Button title="login" onPress={() => navigation.goBack()}></Button>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CreateAccount;
