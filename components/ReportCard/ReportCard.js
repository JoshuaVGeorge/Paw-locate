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

	const truncateWords = (inputString) => {
		const words = inputString.split(" ");
		if (words.length > 6) {
			return `${words.slice(0, 6).join(" ")} ...`;
		} else {
			return inputString;
		}
	};

	const descPreview = truncateWords(description);

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
				<Text style={styles.title}>{petName}</Text>
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
				<Text style={styles.location}>{location}</Text>
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
		paddingHorizontal: 10,
		justifyContent: "center",
	},
	title: {
		alignSelf: "center",
		fontSize: 25,
	},
	image__container: {
		flex: 4,
		paddingBottom: 10,
		borderBottomWidth: 1,
		alignItems: "center",
	},
	image: {
		flex: 1,
		aspectRatio: 4 / 3,
		resizeMode: "cover",
		width: "100%",
		borderRadius: 4,
	},
	location: {
		alignSelf: "center",
		fontSize: 15,
	},
});

export default ReportCard;
