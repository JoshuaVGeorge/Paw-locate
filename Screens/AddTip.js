import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const AddTip = ({ navigation }) => {
	return (
		<View>
			<Text>add tip page</Text>
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

export default AddTip;
