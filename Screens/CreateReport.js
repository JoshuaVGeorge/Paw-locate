import React from "react";
import {
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	TouchableOpacity,
} from "react-native";
import ReportForm from "../components/ReportForm/ReportForm";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateReport = () => {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}>
			<SafeAreaView style={styles.container}>
				<ReportForm />
				<TouchableOpacity style={styles.button}>
					<Text>Submit</Text>
				</TouchableOpacity>
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
	button: {
		marginTop: 20,
		borderWidth: 2,
		alignSelf: "center",
		paddingVertical: 10,
		paddingHorizontal: 50,
	},
});

export default CreateReport;
