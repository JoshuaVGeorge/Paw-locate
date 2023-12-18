import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

const LoginForm = () => {
	const API_URL = process.env.EXPO_PUBLIC_API_URL;
	const navigation = useNavigation();
	const [usernameValue, setUsernameValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");

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

	const loginUser = () => {
		const formData = { user_name: usernameValue, password: passwordValue };
		axios
			.post(`${API_URL}/profile`, formData)
			.then((res) => {
				let data = res.data;
				setUserToken(data.token);
				setUserId(data.profile[0].id);
				return data;
			})
			.then((res) => {
				storeData(res);
				navigation.replace("Profile", {
					userId: res.profile[0].id,
					userToken: res.token,
					userName: res.profile[0].user_name,
				});
			})
			.catch((err) => {
				Alert.alert("Username or Password does not match");
			});
	};

	const storeData = async (data) => {
		try {
			await AsyncStorage.setItem("userToken", data.token);
			await AsyncStorage.setItem("userId", `${data.profile[0].id}`);
			await AsyncStorage.setItem("userName", `${data.profile[0].user_name}`);
		} catch (e) {
			console.log(e);
		}
	};

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
		<View style={styles.container} onLayout={showToast}>
			<TextInput
				style={styles.input}
				placeholder="Username"
				maxLength={40}
				value={usernameValue}
				onChangeText={(text) => setUsernameValue(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				maxLength={20}
				secureTextEntry
				value={passwordValue}
				onChangeText={(text) => setPasswordValue(text)}
			/>
			<TouchableOpacity style={styles.button} onPress={loginUser}>
				<Text>Login</Text>
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
		marginBottom: 30,
	},
	button: {
		alignSelf: "flex-end",
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderWidth: 2,
	},
});

export default LoginForm;
