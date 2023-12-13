import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./Screens/Home";

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Home />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	container__touchable: {
		flex: 1,
	},
});

export default App;
