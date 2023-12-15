import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import ReportCard from "../components/ReportCard/ReportCard";
import axios from "axios";
import * as SplashScreen from "expo-splash-screen";
import { API_URL } from "@env";

const ViewReports = ({ navigation }) => {
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
			<Button
				title="Search Reports"
				onPress={() => navigation.navigate("SearchReports")}></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	list: {
		flex: 1,
		height: "90%",
		paddingHorizontal: 30,
	},
});

export default ViewReports;
