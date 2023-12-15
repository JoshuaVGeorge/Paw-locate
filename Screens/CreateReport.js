import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import ReportForm from "../components/ReportForm/ReportForm";

const CreateReport = () => {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}>
			<View style={styles.container}>
				<Text>Create Report</Text>
				<ReportForm />
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
});

export default CreateReport;
