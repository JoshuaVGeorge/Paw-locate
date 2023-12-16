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
				<View style={styles.button__container}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							navigation.goBack();
						}}>
						<Text>Cancel</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Text>Submit</Text>
					</TouchableOpacity>
				</View>
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
	button__container: {
		flexDirection: "row",
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
