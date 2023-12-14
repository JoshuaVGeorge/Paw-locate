import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NavButton = () => {
	return (
		<View style={styles.NavButtonContainer}>
			<TouchableOpacity style={styles.button1}>
				<Text style={styles.buttonText}>View Reports</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button2}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	NavButtonContainer: {
		backgroundColor: "#2cdd59",
		flexDirection: "row",
		justifyContent: "center",
	},
	button1: {
		backgroundColor: "#DDDDDD",
		padding: 10,
	},
	button2: {
		backgroundColor: "#DDDDDD",
		padding: 10,
	},
	buttonText: {
		fontSize: 20,
	},
});

export default NavButton;
