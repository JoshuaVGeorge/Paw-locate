import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import axios from "axios";
import TipCard from "../components/TipCard/TipCard";
import { API_URL } from "@env";

const ViewTips = ({ navigation, route }) => {
	const { reportId } = route.params;

	SplashScreen.preventAutoHideAsync();

	const [appReady, setAppReady] = useState(false);
	const [tipData, setTipData] = useState();

	useEffect(() => {
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
