import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
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
