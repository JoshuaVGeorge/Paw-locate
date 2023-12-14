import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ReportCard from "../components/ReportCard/ReportCard";
import axios from "axios";

const ViewReports = ({ navigation }) => {
	const apiURL = "http://192.168.1.72:8080/reports";

	const [reportData, setReportData] = useState();

	useEffect(() => {
		axios
			.get(apiURL)
			.then((res) => {
				setReportData(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (reportData) {
		reportData.map((report) => {
			console.log(report.id);
		});
	}

	return (
		<View style={styles.container}>
			<Text>Reports Page</Text>
			<View style={styles.list}>
				<ReportCard />
			</View>
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
		paddingHorizontal: 30,
	},
});

export default ViewReports;
