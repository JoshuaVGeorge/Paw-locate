import React, { useEffect, useRef, useState } from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Image,
	TouchableHighlight,
	TouchableOpacity,
	Text,
	Alert,
} from "react-native";
import placeholderImg from "../../assets/icon.png";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const ReportForm = ({ isEdit, reportData, userId }) => {
	const navigation = useNavigation();

	const [petNameValue, setPetNameValue] = useState("");
	const [descValue, setDescValue] = useState("");
	const [locationValue, setLocationValue] = useState("");
	const [image, setImage] = useState(placeholderImg);

	useEffect(() => {
		if (isEdit) {
			setDescValue(reportData.description);
			setPetNameValue(reportData.pet_name);
			setLocationValue(reportData.location_data);
			setImage(reportData.pet_image);
		}
	}, []);

	const petNameRef = useRef(null);
	const descRef = useRef(null);
	const locationRef = useRef(null);
	const statusRef = useRef(null);

	const formData = new FormData();

	const submitForm = () => {
		if (!petNameValue || !descValue || !locationValue) {
			Alert.alert("please fill all fields");
		} else {
			formData.append("image", {
				placeholderImg,
				type: "image/jpeg",
				name: "test.jp",
			});
			formData.append("Pet_name", petNameValue);
			formData.append("desc", descValue);
			formData.append("location", locationValue);
			formData.append("userId", userId);

			Alert.alert("report submitted");
			console.log(formData);
			navigation.goBack();
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.form}>
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
					<Image
						style={styles.image}
						source={isEdit ? { uri: `${image}` } : placeholderImg}
					/>
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
			<View style={styles.button__container}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.goBack();
					}}>
					<Text>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={submitForm}>
					<Text>Submit</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
	},
	form: {
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
	button__container: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		marginTop: 20,
		borderWidth: 2,
		alignSelf: "center",
		paddingVertical: 10,
		paddingHorizontal: 50,
	},
});

export default ReportForm;
