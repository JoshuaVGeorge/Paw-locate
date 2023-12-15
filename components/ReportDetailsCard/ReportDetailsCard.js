import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ReportDetailsCard = ({
	petName,
	description,
	petImg,
	location,
	status,
}) => {
	return (
		<View style={styles.card}>
			<View style={[styles.section, styles.title]}>
				<Text>{petName}</Text>
			</View>
			<View style={styles.image__container}>
				<Image
					style={styles.image}
					source={{
						uri: petImg,
					}}
				/>
			</View>
			<View style={[styles.section, styles.description]}>
				<Text>{description}</Text>
			</View>
			<View style={styles.section}>
				<Text>{location}</Text>
			</View>
			<View style={styles.section}>
				<Text>{status}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		height: 600,
		borderWidth: 2,
		borderRadius: 4,
		marginBottom: 20,
	},
	section: {
		flex: 1,
		borderBottomWidth: 1,
		paddingLeft: 5,
		justifyContent: "center",
	},
	title: {
		alignItems: "center",
	},
	description: {
		flex: 3,
	},
	image__container: {
		flex: 5,
		borderBottomWidth: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		aspectRatio: 16 / 9,
		resizeMode: "contain",
		maxWidth: 350,
		height: "80%",
	},
});

export default ReportDetailsCard;
