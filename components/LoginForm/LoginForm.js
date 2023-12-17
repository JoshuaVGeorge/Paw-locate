import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";
import { API_URL } from "@env";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginForm = () => {
	const navigation = useNavigation();
	const [usernameValue, setUsernameValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");

	const [userToken, setUserToken] = useState("");
	const [userInfo, setUserInfo] = useState("");

	useEffect(() => {
		checkLoggedIn();
		if (userToken && userInfo) {
			navigation.navigate("Profile", {
				userInfo: userInfo,
				userToken: userToken,
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
				setUserInfo(data.profile[0].id);
				return data;
			})
			.then((res) => {
				storeData(res);
				navigation.replace("Profile", {
					userInfo: userInfo,
					userToken: userToken,
				});
			})
			.catch((err) => {
				Alert.alert("Username or Password does not match");
			});
	};

	const storeData = async (data) => {
		try {
			await AsyncStorage.setItem("userToken", data.token);
			await AsyncStorage.setItem("userInfo", `${data.profile[0].id}`);
		} catch (e) {
			console.log(e);
		}
	};

	const checkLoggedIn = async () => {
		try {
			let asyncUserToken = await AsyncStorage.getItem("userToken");
			let asyncUserinfo = await AsyncStorage.getItem("userInfo");
			setUserToken(asyncUserToken);
			setUserInfo(asyncUserinfo);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={styles.container}>
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
