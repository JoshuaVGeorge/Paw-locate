import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ViewTips = ({ navigation }) => {
	return (
		<View>
			<Text>View Tips</Text>
			<Button
				title="go back"
				onPress={() => {
					navigation.goBack();
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ViewTips;
