import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const EditReport = ({ navigation }) => {
	return (
		<View>
			<Text>Edit Report</Text>
			<Button
				title="report details"
				onPress={() => {
					navigation.navigate("ReportDetails");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default EditReport;
