import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import TipForm from "../components/TipForm/TipForm";

const AddTip = ({ route }) => {
	const { reportId, userId } = route.params;

	return (
		<View style={styles.container}>
			<TipForm reportId={reportId} userId={userId} />
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
