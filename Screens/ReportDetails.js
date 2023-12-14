import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ReportDetails = ({ navigation }) => {
	return (
		<View>
			<Text>Report Details</Text>
			<Button
				title="Search Reports"
				onPress={() => {
					navigation.navigate("SearchReports");
				}}
			/>
			<Button
				title="Add a tip"
				onPress={() => {
					navigation.navigate("AddTip");
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

const styles = StyleSheet.create({});

export default ReportDetails;
