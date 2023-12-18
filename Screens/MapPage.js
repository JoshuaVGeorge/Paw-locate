import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	Button,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

const homeRegion = {
	latitude: 49.259686947000034,
	latitudeDelta: 0.19062284008533226,
	longitude: -123.16587405279279,
	longitudeDelta: 0.17237719148397446,
};

const reportData = [
	{
		id: 1,
		pet_name: "Macropus agilis ",
		description: "idk\n",
		userName: "llama",
		location_data: { latitude: 49.25, longitude: -123.1 },
	},
	{
		id: 2,
		pet_name: "garfield ",
		description: "lasganagae",
		userName: "llama23123",
		location_data: { latitude: 49.229, longitude: -123.16999 },
	},
];

const MapPage = ({ navigation }) => {
	const calloutPress = (id) => {
		navigation.navigate("ReportDetails", { reportId: id });
	};
	const makeMarkers = () => {
		return reportData.map((report) => {
			return (
				<Marker
					key={report.id}
					coordinate={report.location_data}
					title={report.pet_name}
					description={report.description}>
					<Callout onPress={() => calloutPress(report.id)}>
						<View>
							<Text>{report.pet_name}</Text>
							<Text>{report.description}</Text>
						</View>
					</Callout>
				</Marker>
			);
		});
	};

	return (
		<View style={styles.container}>
			<Text>This is just a demo, full functionality WIP</Text>
			<MapView style={styles.map} initialRegion={homeRegion}>
				{makeMarkers()}
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: "100%",
		height: "100%",
	},
});

export default MapPage;
