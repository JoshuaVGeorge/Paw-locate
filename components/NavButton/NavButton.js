import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NavButton = () => {
	return (
		<View>
			<TouchableOpacity>
				<Text>View Reports</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text>Login</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({});

export default NavButton;
