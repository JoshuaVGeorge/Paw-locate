import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import ListTile from "../components/ListTile/ListTile";

const Profile = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>USERNAME</Text>
			<View style={styles.reports}>
				<Text style={styles.subheading}>Open Reports</Text>
				<ListTile primaryLabel={"muffin"} sndLabel={"edit"} />
			</View>
			<View style={styles.tips}>
				<Text style={styles.subheading}>Recent Tips</Text>
				<ListTile
					primaryLabel={"this is a tip preview"}
					sndLabel={"view report"}
				/>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.button__text}>Log Out</Text>
			</TouchableOpacity>
			<Button
				title="add report"
				onPress={() => {
					navigation.navigate("CreateReport");
				}}></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	title: {
		fontSize: 30,
		marginBottom: 30,
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
