import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import TipForm from "../components/TipForm/TipForm";

const AddTip = ({ navigation, route }) => {
	const { reportId } = route.params;
	return (
		<View style={styles.container}>
			<TipForm reportId={reportId} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
});

export default AddTip;
