import React from "react";
import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import TipForm from "../components/TipForm/TipForm";

const AddTip = ({ route }) => {
	const { reportId, userId } = route.params;

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}>
			<View style={styles.container}>
				<TipForm reportId={reportId} userId={userId} />
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

export default AddTip;
