import React, { useEffect, useState, useCallback } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Alert,
	FlatList,
} from "react-native";
import ListTile from "../components/ListTile/ListTile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const Profile = ({ navigation, route }) => {
	const API_URL = process.env.EXPO_PUBLIC_API_URL;
	SplashScreen.preventAutoHideAsync();
	const goTo = (label, reportId, isTip) => {
		if (isTip) {
			navigation.navigate("ViewTips", { reportId: reportId });
		} else if (label === "edit") {
			navigation.navigate("EditReport", { reportId: reportId });
		} else {
			navigation.navigate("ReportDetails", { reportId: reportId });
		}
	};

	const { userId, userToken, userName } = route.params;

	const removeCredentials = async () => {
		try {
			await AsyncStorage.removeItem("userToken");
			await AsyncStorage.removeItem("userId");
			await AsyncStorage.removeItem("userName");
		} catch (e) {
			console.log(e);
		}
	};

	const logOut = () => {
		removeCredentials();
		navigation.navigate("Home");
		Alert.alert("Logged out successfully");
	};

	const [appReady, setAppReady] = useState(false);
	const [reportData, setReportData] = useState();
	const [tipsData, setTipsData] = useState();

	const updatePage = () => {
		const reqOne = axios.get(`${API_URL}/profile/${userId}/reports`);
		const reqTwo = axios.get(`${API_URL}/profile/${userId}/tips`);

		axios.all([reqOne, reqTwo]).then(
			axios.spread((...res) => {
				setReportData(res[0].data);
				setTipsData(res[1].data);
				setAppReady(true);
			})
		);
	};
	// for initial page load
	useEffect(() => {
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

	const truncateWords = (inputString) => {
		const words = inputString.split(" ");
		if (words.length > 5) {
			return `${words.slice(0, 5).join(" ")} ...`;
		} else {
			return inputString;
		}
	};

	const newTipsArr = [];

	const tipsPreview = tipsData.map((tip) => {
		const preview = truncateWords(tip.text_data);
		const newTipObj = {
			id: tip.id,
			text_data: preview,
			report_id: tip.report_id,
		};

		return newTipsArr.push(newTipObj);
	});

	const itemCount = (arr) => {
		if (!arr.length) {
			return 0;
		} else {
			return arr.length;
		}
	};

	return (
		<View style={styles.container} onLayout={checkData}>
			<View style={styles.topbar}>
				<Text style={styles.title}>{userName}</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate("CreateReport", { userId: userId });
					}}>
					<Text>Add Report</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.reports}>
				<Text style={styles.subheading}>{`Open Reports -- ${itemCount(
					reportData
				)}`}</Text>
				<FlatList
					data={reportData}
					renderItem={({ item }) => (
						<ListTile
							primaryLabel={item.pet_name}
							sndLabel={"edit"}
							goTo={goTo}
							reportId={item.id}
						/>
					)}
				/>
			</View>
			<View style={styles.tips}>
				<Text style={styles.subheading}>{`Recent Tips -- ${itemCount(
					tipsData
				)}`}</Text>
				<FlatList
					data={newTipsArr}
					renderItem={({ item }) => (
						<ListTile
							primaryLabel={item.text_data}
							sndLabel={"view report"}
							goTo={goTo}
							reportId={item.report_id}
							isTip={true}
						/>
					)}
				/>
			</View>
			<TouchableOpacity style={styles.button} onPress={logOut}>
				<Text style={styles.button__text}>Log Out</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	topbar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 30,
	},
	title: {
		fontSize: 30,
	},
	subheading: {
		fontSize: 20,
		marginBottom: 10,
	},
	reports: {
		flex: 2,
	},
	tips: {
		flex: 2,
	},
	button: {
		borderWidth: 2,
		alignItems: "center",
		paddingVertical: 5,
		width: "50%",
		alignSelf: "center",
	},
	button__text: {
		fontSize: 20,
	},
});

export default Profile;
