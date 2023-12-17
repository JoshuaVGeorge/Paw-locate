import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ListTile from "../components/ListTile/ListTile";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation, route }) => {
	const goTo = (label, reportId, isTip) => {
		if (isTip) {
			navigation.navigate("ViewTips", { reportId: reportId });
		} else if (label === "edit") {
			navigation.navigate("EditReport", { reportId: reportId });
		} else {
			navigation.navigate("ReportDetails", { reportId: reportId });
		}
	};

	const removeCredentials = async () => {
		try {
			await AsyncStorage.removeItem("userToken");
			await AsyncStorage.removeItem("userInfo");
		} catch (e) {
			console.log(e);
		}
	};

	const logOut = () => {
		removeCredentials();
		navigation.navigate("Home");
	};

	return (
		<View style={styles.container}>
			<View style={styles.topbar}>
				<Text style={styles.title}>USERNAME</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate("CreateReport", { userId: userId });
					}}>
					<Text>Add Report</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.reports}>
				<Text style={styles.subheading}>Open Reports</Text>
				<ListTile
					primaryLabel={"muffin"}
					sndLabel={"edit"}
					goTo={goTo}
					reportId={1}
				/>
			</View>
			<View style={styles.tips}>
				<Text style={styles.subheading}>Recent Tips</Text>
				<ListTile
					primaryLabel={"this is a tip preview"}
					sndLabel={"view report"}
					goTo={goTo}
					reportId={1}
					isTip={true}
				/>
			</View>
			<TouchableOpacity style={styles.button} onPress={logOut}>
				<Text style={styles.button__text}>Log Out</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	topbar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 30,
	},
	title: {
		fontSize: 30,
	},
	subheading: {
		fontSize: 20,
		marginBottom: 10,
	},
	reports: {
		flex: 2,
	},
	tips: {
		flex: 2,
	},
	button: {
		borderWidth: 2,
		alignItems: "center",
		paddingVertical: 5,
		width: "50%",
		alignSelf: "center",
	},
	button__text: {
		fontSize: 20,
	},
});

export default Profile;
