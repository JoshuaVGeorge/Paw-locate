import React, { useCallback, useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	Text,
} from "react-native";
import ReportCard from "../components/ReportCard/ReportCard";
import axios from "axios";
import * as SplashScreen from "expo-splash-screen";

const ViewReports = ({ navigation }) => {
	const API_URL = process.env.EXPO_PUBLIC_API_URL;
	SplashScreen.preventAutoHideAsync();

	const [appReady, setAppReady] = useState(false);
	const [reportData, setReportData] = useState();

	useEffect(() => {
		axios
			.get(`${API_URL}/reports`)
			.then((res) => {
				setReportData(res.data);
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
			<FlatList
				style={styles.list}
				data={reportData}
				renderItem={({ item }) => (
					<ReportCard
						id={item.id}
						petName={item.pet_name}
						petImg={item.pet_image}
						description={item.description}
						location={item.location_data}
						status={item.status}
						userId={item.user_id}
					/>
				)}
			/>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("MapPage")}>
				<Text>Go to Map</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	list: {
		height: "90%",
		paddingHorizontal: 30,
	},
	button: {
		borderTopWidth: 2,
		paddingVertical: 10,
		alignItems: "center",
	},
});

export default ViewReports;
