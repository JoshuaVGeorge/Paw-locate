import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	Button,
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
				<TouchableOpacity
					style={styles.button}
					title="create account"
					onPress={() => navigation.navigate("CreateAccount")}>
					<Text style={styles.button__text}>Create an account</Text>
				</TouchableOpacity>
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
	button: {
		alignSelf: "center",
	},
	button__text: {
		color: "blue",
		textDecorationColor: "blue",
		textDecorationLine: "underline",
	},
});

export default Login;
