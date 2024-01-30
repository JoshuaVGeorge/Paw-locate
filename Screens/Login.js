import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import LoginForm from "../components/LoginForm/LoginForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

const Login = ({ navigation }) => {
	const [userToken, setUserToken] = useState("");
	const [userId, setUserId] = useState("");
	const [userName, setUserName] = useState("");

	useEffect(() => {
		checkLoggedIn();
		if (userToken && userId && userName) {
			navigation.navigate("Profile", {
				userId: userId,
				userToken: userToken,
				userName: userName,
			});
		}
	});

	const checkLoggedIn = async () => {
		try {
			let asyncUserToken = await AsyncStorage.getItem("userToken");
			let asyncUserId = await AsyncStorage.getItem("userId");
			let asyncUserName = await AsyncStorage.getItem("userName");
			setUserToken(asyncUserToken);
			setUserId(asyncUserId);
			setUserName(asyncUserName);
		} catch (e) {
			console.log(e);
		}
	};

	const showToast = () => {
		if (userToken && userName) {
			ToastAndroid.show(`Logged in as ${userName}`, ToastAndroid.SHORT);
		}
	};

	return (
		<TouchableWithoutFeedback
			onLayout={showToast}
			onPress={() => {
				Keyboard.dismiss();
			}}>
			<View style={styles.container}>
				<Text style={styles.title}>PAW LOCATE</Text>
				<LoginForm
					setUserId={setUserId}
					setUserName={setUserName}
					setUserToken={setUserToken}
				/>
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
