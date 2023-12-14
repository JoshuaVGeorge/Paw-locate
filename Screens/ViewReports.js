import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ViewReports = ({ navigation }) => {
	return (
		<View>
			<Text>Reports Page</Text>
			<Button
				title="Search Reports"
				onPress={() => navigation.navigate("SearchReports")}></Button>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ViewReports;
