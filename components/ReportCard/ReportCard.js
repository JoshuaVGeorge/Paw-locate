import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ReportCard = ({
	id,
	petName,
	description,
	petImg,
	location,
	status,
	userId,
}) => {
	const navigation = useNavigation();

	function truncateToFiveWords(inputString) {
		const words = inputString.split(" ");
		if (words.length > 6) {
			return `${words.slice(0, 6).join(" ")} ...`;
		} else {
			return inputString;
		}
	}

	const descPreview = truncateToFiveWords(description);

	return (
		<TouchableOpacity
			style={styles.card}
			onPress={() => {
				navigation.navigate("ReportDetails", {
					reportId: id,
					userId: userId,
				});
			}}>
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
				<Text>{descPreview}</Text>
			</View>
			<View style={styles.section}>
				<Text>{location}</Text>
			</View>
			<View style={styles.section}>
				<Text>{status}</Text>
			</View>
		</TouchableOpacity>
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
		borderBottomWidth: 1,
		paddingLeft: 5,
		justifyContent: "center",
	},
	image__container: {
		flex: 4,
		borderBottomWidth: 1,
		alignItems: "center",
		padding: 10,
	},
	image: {
		aspectRatio: 16 / 9,
		resizeMode: "contain",
		height: "100%",
		borderRadius: 4,
	},
});

export default ReportCard;
