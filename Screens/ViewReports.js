import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ReportCard from "../components/ReportCard/ReportCard";

const ViewReports = ({ navigation }) => {
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
