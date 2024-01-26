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
			<View style={styles.image__container}>
				<Text style={styles.title}>{petName}</Text>
				<Image
					style={styles.image}
					source={{
						uri: petImg,
					}}
				/>
			</View>
			<View style={styles.section}>
				<Text style={styles.description}>{description}</Text>
			</View>
			<View style={styles.section}>
				<Text style={styles.location}>{location}</Text>
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
		paddingHorizontal: 10,
		justifyContent: "center",
	},
	title: {
		marginBottom: 20,
		alignSelf: "center",
		fontSize: 30,
	},
	image__container: {
		flex: 4,
		borderBottomWidth: 1,
		justifyContent: "center",
		paddingHorizontal: 20,
	},
	image: {
		aspectRatio: 4 / 3,
		resizeMode: "cover",
		width: "100%",
		borderRadius: 4,
	},
	description: {
		fontSize: 15,
	},
	location: {
		alignSelf: "center",
		fontSize: 25,
	},
});

export default ReportDetailsCard;
