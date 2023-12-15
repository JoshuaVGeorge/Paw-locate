import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import axios from "axios";
import * as SplashScreen from "expo-splash-screen";
import ReportDetailsCard from "../components/ReportDetailsCard/ReportDetailsCard";

const ReportDetails = ({ navigation, route }) => {
	const apiURL = "http://192.168.1.72:8080/reports";
	const { reportId, userId } = route.params;

	SplashScreen.preventAutoHideAsync();

	const [appReady, setAppReady] = useState(false);
	const [reportData, setReportData] = useState();

	useEffect(() => {
		axios
			.get(`${apiURL}/${reportId}`)
			.then((res) => {
				setReportData(res.data[0]);
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
			<ReportDetailsCard
				petName={reportData.pet_name}
				petImg={reportData.pet_image}
				description={reportData.description}
				location={reportData.location_data}
				status={reportData.status}
			/>
			<Button
				title="Search Reports"
				onPress={() => {
					navigation.navigate("SearchReports");
				}}
			/>
			<Button
				title="View tips"
				onPress={() => {
					navigation.navigate("ViewTips");
				}}
			/>
			<Button
				title="edit report"
				onPress={() => {
					navigation.navigate("EditReport");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
	},
});

export default ReportDetails;
