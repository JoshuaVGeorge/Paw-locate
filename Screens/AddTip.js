import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import TipForm from "../components/TipForm/TipForm";

const AddTip = ({ route }) => {
	const { reportId, userName, userId } = route.params;

	return (
		<View style={styles.container}>
			<TipForm reportId={reportId} userId={userId} userName={userName} />
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
