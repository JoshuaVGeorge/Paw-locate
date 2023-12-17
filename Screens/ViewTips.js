import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList, Alert } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import axios from "axios";
import TipCard from "../components/TipCard/TipCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

const ViewTips = ({ navigation, route }) => {
	const { reportId } = route.params;

	SplashScreen.preventAutoHideAsync();

	const [appReady, setAppReady] = useState(false);
	const [tipData, setTipData] = useState();
	const [userId, setUserId] = useState("");
	const [userName, setUserName] = useState("");

	const retrieveStorage = async () => {
		try {
			let asyncUserName = await AsyncStorage.getItem("userName");
			let asyncUserId = await AsyncStorage.getItem("userId");
			setUserId(asyncUserId);
			setUserName(asyncUserName);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		retrieveStorage();
		axios
			.get(`${API_URL}/reports/${reportId}/tips`)
			.then((res) => {
				setTipData(res.data);
				setAppReady(true);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const checkData = useCallback(async () => {
		if (appReady) {
			await SplashScreen.hideAsync();
		}
	}, [appReady]);

	if (!appReady) {
		return null;
	}

	const checkLoggedIn = () => {
		if (userName && userId) {
			navigation.navigate("AddTip", {
				userName: userName,
				userId: userId,
				reportId: reportId,
			});
		} else {
			Alert.alert("please log in to add a tip");
		}
	};

	return (
		<View style={styles.container} onLayout={checkData}>
			<Text style={styles.title}>Tip Board</Text>
			<FlatList
				data={tipData}
				renderItem={({ item }) => (
					<TipCard
						user_name={item.user_name}
						id={item.id}
						img={item.image}
						status={item.staus}
						text_data={item.text_data}
					/>
				)}
			/>
			<Button
				title="add a tip"
				onPress={() => {
					checkLoggedIn();
					// navigation.navigate("AddTip", { reportId: reportId });
				}}
			/>
			<Button
				title="go back"
				onPress={() => {
					navigation.goBack();
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
	},
	title: {
		textAlign: "center",
		marginVertical: 20,
	},
});

export default ViewTips;
