import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import * as SplashScreen from "expo-splash-screen";
import ReportDetailsCard from "../components/ReportDetailsCard/ReportDetailsCard";
import { API_URL } from "@env";

const ReportDetails = ({ navigation, route }) => {
	const { reportId, userId } = route.params;

	SplashScreen.preventAutoHideAsync();

	const [appReady, setAppReady] = useState(false);
	const [reportData, setReportData] = useState();

	useEffect(() => {
		axios
			.get(`${API_URL}/reports/${reportId}`)
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
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation.navigate("ViewTips", { reportId: reportData.id });
				}}>
				<Text>View tips</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
	},
	button: {
		borderWidth: 2,
		paddingVertical: 10,
		marginHorizontal: 50,
		alignItems: "center",
	},
});

export default ReportDetails;
