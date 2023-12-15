import React, { useCallback, useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	TouchableOpacity,
} from "react-native";
import ReportForm from "../components/ReportForm/ReportForm";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { API_URL } from "@env";
import axios from "axios";

const EditReport = ({ navigation, route }) => {
	SplashScreen.preventAutoHideAsync();

	const { reportId } = route.params;

	const [appReady, setAppReady] = useState(false);
	const [initialReportData, setInitialReportData] = useState();

	useEffect(() => {
		axios
			.get(`${API_URL}/reports/${reportId}`)
			.then((res) => {
				setInitialReportData(res.data[0]);
				setAppReady(true);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const checkData = useCallback(async () => {
		if (appReady) {
			await SplashScreen.hideAsync();
		}
	}, [appReady]);

	if (!appReady) {
		return null;
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}>
			<SafeAreaView style={styles.container}>
				<ReportForm isEdit={true} reportData={initialReportData} />
				<View style={styles.button__container} onLayout={checkData}>
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

export default EditReport;
