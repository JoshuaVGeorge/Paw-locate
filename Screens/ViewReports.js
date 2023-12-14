import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import ReportCard from "../components/ReportCard/ReportCard";

const ViewReports = ({ navigation }) => {
	return (
		<View>
			<Text>Reports Page</Text>
			<ReportCard />
			<Button
				title="Search Reports"
				onPress={() => navigation.navigate("SearchReports")}></Button>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ViewReports;
