import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Profile = ({ navigation }) => {
	return (
		<View>
			<Text>Profile page</Text>
			<Button
				title="Search Reports"
				onPress={() => {
					navigation.navigate("SearchReports");
				}}
			/>
			<Button
				title="Create report"
				onPress={() => {
					navigation.navigate("CreateReport");
				}}
			/>
			<Button
				title="View report"
				onPress={() => {
					navigation.navigate("ReportDetails");
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

export default Profile;
