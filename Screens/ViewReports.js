import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import ReportCard from "../components/ReportCard/ReportCard";
import axios from "axios";
import * as SplashScreen from "expo-splash-screen";

const ViewReports = ({ navigation }) => {
	const apiURL = "http://192.168.1.72:8080/reports";

	SplashScreen.preventAutoHideAsync();

	const [appReady, setAppReady] = useState(false);
	const [reportData, setReportData] = useState();

	useEffect(() => {
		axios
			.get(apiURL)
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
			console.log(reportData);
			await SplashScreen.hideAsync();
		}
	}, [appReady]);

	if (!appReady) {
		return null;
	}

	return (
		<View style={styles.container} onLayout={checkData}>
			<Text>Reports Page</Text>
			<FlatList
				style={styles.list}
				data={reportData}
				renderItem={(report) => <ReportCard id={report.id} />}
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
