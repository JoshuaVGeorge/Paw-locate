import React from "react";
import {
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	TouchableOpacity,
	View,
} from "react-native";
import ReportForm from "../components/ReportForm/ReportForm";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateReport = ({ navigation }) => {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}>
			<SafeAreaView style={styles.container}>
				<ReportForm />
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		justifyContent: "space-between",
	},
});

export default CreateReport;
