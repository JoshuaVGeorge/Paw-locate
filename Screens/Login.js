import React from "react";
import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = ({ navigation }) => {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}>
			<View style={styles.container}>
				<Text style={styles.title}>PAW LOCATE</Text>
				<LoginForm />
				<Button
					title="create account"
					onPress={() => navigation.navigate("CreateAccount")}></Button>
			</View>
		</TouchableWithoutFeedback>
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
