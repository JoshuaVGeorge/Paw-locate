import React, { useState, useCallback, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	FlatList,
	Alert,
	TouchableOpacity,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import axios from "axios";
import TipCard from "../components/TipCard/TipCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const ViewTips = ({ navigation, route }) => {
	const API_URL = process.env.EXPO_PUBLIC_API_URL;
	const { reportId } = route.params;

	SplashScreen.preventAutoHideAsync();

	const [appReady, setAppReady] = useState(false);
	const [tipData, setTipData] = useState();
	const [userId, setUserId] = useState("");

	const retrieveStorage = async () => {
		try {
			let asyncUserId = await AsyncStorage.getItem("userId");
			setUserId(asyncUserId);
		} catch (e) {
			console.log(e);
		}
	};

	const updatePage = () => {
		axios
			.get(`${API_URL}/reports/${reportId}/tips`)
			.then((res) => {
				setTipData(res.data);
				setAppReady(true);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	// for initial page load
	useEffect(() => {
		retrieveStorage();
		updatePage();
	}, []);

	// for refreshing the page on mount
	useFocusEffect(
		React.useCallback(() => {
			updatePage();
		}, [])
	);

	const checkData = useCallback(async () => {
		if (appReady) {
			await SplashScreen.hideAsync();
		}
	}, [appReady]);

	if (!appReady) {
		return null;
	}

	const checkLoggedIn = () => {
		if (userId) {
			navigation.navigate("AddTip", {
				userId: userId,
				reportId: reportId,
			});
		} else {
			Alert.alert("please log in to add a tip");
		}
	};

	const tipCount = (arr) => {
		if (!arr.length) {
			return 0;
		} else {
			return arr.length;
		}
	};

	return (
		<View style={styles.container} onLayout={checkData}>
			<Text style={styles.title}>{`Tip Board -- ${tipCount(tipData)}`}</Text>
			<FlatList
				style={styles.list}
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
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					checkLoggedIn();
				}}>
				<Text>Add a tip</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	list: {
		padding: 20,
	},
	title: {
		textAlign: "center",
		marginVertical: 20,
	},
	button: {
		borderWidth: 2,
		paddingVertical: 10,
		alignItems: "center",
	},
});

export default ViewTips;
