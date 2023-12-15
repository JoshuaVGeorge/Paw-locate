import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import axios from "axios";

const ViewTips = ({ navigation, route }) => {
	const apiURL = "http://192.168.1.72:8080/reports";
	const { reportId } = route.params;

	SplashScreen.preventAutoHideAsync();

	const [appReady, setAppReady] = useState(false);
	const [tipData, setTipData] = useState();

	useEffect(() => {
		axios
			.get(`${apiURL}/${reportId}/tips`)
			.then((res) => {
				// setTipData(res.data[0]);
				// setAppReady(true);
				console.log(res.data);
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

	return (
		<View>
			<Text>View Tips</Text>
			<Button
				title="go back"
				onPress={() => {
					navigation.goBack();
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ViewTips;
