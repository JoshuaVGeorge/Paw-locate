import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListTile = ({ primaryLabel, sndLabel, goTo, isTip, reportId }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[styles.primary__tile, styles.tile]}
				onPress={() => {
					goTo(primaryLabel, reportId, isTip);
				}}>
				<Text style={styles.container}>{primaryLabel}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.snd__tile, styles.tile]}
				onPress={() => {
					goTo(sndLabel, reportId);
				}}>
				<Text style={styles.container}>{sndLabel}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 20,
		marginBottom: 5,
	},
	tile: {
		borderWidth: 2,
		padding: 10,
	},
	primary__tile: {
		width: "70%",
		backgroundColor: "orange",
	},
	snd__tile: {
		alignItems: "center",
		width: "25%",
	},
});

export default ListTile;
