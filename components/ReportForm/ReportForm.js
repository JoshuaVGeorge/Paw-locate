import React, { useEffect, useRef, useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Image,
	TouchableHighlight,
} from "react-native";
import placeholderImg from "../../assets/icon.png";

const ReportForm = ({ isEdit, reportData }) => {
	const [petNameValue, setPetNameValue] = useState(reportData.pet_name);
	const [descValue, setDescValue] = useState(reportData.description);
	const [locationValue, setLocationValue] = useState(reportData.location_data);

	const petNameRef = useRef(null);
	const descRef = useRef(null);
	const locationRef = useRef(null);
	const statusRef = useRef(null);

	return (
		<View style={styles.container}>
			<View style={styles.section}>
				<TextInput
					ref={petNameRef}
					style={styles.input}
					defaultValue={isEdit ? reportData.pet_name : "Pet name"}
					maxLength={50}
					value={petNameValue}
					onChangeText={(text) => setPetNameValue(text)}
					onFocus={() => {
						petNameRef.current.clear();
					}}></TextInput>
			</View>
			<TouchableHighlight
				style={styles.image__container}
				underlayColor="#DDDDDD"
				// onPress={() => {
				// 	console.log("click");}}
			>
				<Image style={styles.image} source={placeholderImg} />
			</TouchableHighlight>
			<View style={[styles.section, styles.description]}>
				<TextInput
					ref={descRef}
					style={styles.input}
					defaultValue={isEdit ? reportData.description : "description"}
					maxLength={150}
					numberOfLines={4}
					multiline
					value={descValue}
					onChangeText={(text) => setDescValue(text)}
					onFocus={() => {
						descRef.current.clear();
					}}></TextInput>
			</View>
			<View style={styles.section}>
				<TextInput
					ref={locationRef}
					style={styles.input}
					defaultValue={isEdit ? reportData.location_data : "location"}
					value={locationValue}
					onChangeText={(text) => setLocationValue(text)}
					onFocus={() => {
						locationRef.current.clear();
					}}></TextInput>
			</View>
			<View style={styles.section}>
				<TextInput
					ref={statusRef}
					style={styles.input}
					defaultValue={isEdit ? `${reportData.status}` : "status"}
					onFocus={() => {
						statusRef.current.clear();
					}}></TextInput>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 400,
		borderWidth: 2,
		borderRadius: 4,
	},
	section: {
		borderBottomWidth: 1,
	},
	description: {
		flex: 2,
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
		width: "100%",
		height: "100%",
		borderRadius: 4,
	},
	input: {
		padding: 10,
	},
});

export default ReportForm;
