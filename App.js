import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import ViewReports from "./Screens/ViewReports";
import CreateAccount from "./Screens/CreateAccount";
import Profile from "./Screens/Profile";
import SearchReports from "./Screens/SearchReports";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="ViewReports" component={ViewReports} />
				<Stack.Screen name="CreateAccount" component={CreateAccount} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="SearchReports" component={SearchReports} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({});

export default App;
