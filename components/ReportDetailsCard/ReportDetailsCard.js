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
			<View style={styles.section}>
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
			<View style={styles.section}>
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
		height: 400,
		borderWidth: 2,
		borderRadius: 4,
		marginBottom: 20,
	},
	section: {
		flex: 1,
		borderWidth: 1,
		paddingLeft: 5,
		justifyContent: "center",
	},
	image__container: {
		flex: 4,
		borderWidth: 1,
		alignItems: "center",
		padding: 10,
	},
	image: {
		aspectRatio: 16 / 9,
		resizeMode: "cover",
		height: "100%",
		width: "100%",
		borderRadius: 4,
	},
});

export default ReportDetailsCard;
