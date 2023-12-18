import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	TouchableOpacity,
} from "react-native";
import CreateAccountForm from "../components/CreateAccountForm/CreateAccountForm";

const Login = ({ navigation }) => {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}>
			<View style={styles.container}>
				<Text style={styles.title}>PAW LOCATE</Text>
				<CreateAccountForm />
				<TouchableOpacity
					style={styles.button}
					title="create account"
					onPress={() => navigation.navigate("Login")}>
					<Text style={styles.button__text}>Already have an account ?</Text>
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
