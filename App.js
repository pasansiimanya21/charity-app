import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import MainScreen from "./src/screens/MainScreen";
import DonationBoard from "./src/screens/DonationBoard";
import SponsorScreen from "./src/screens/SponsorScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import Donation from "./src/screens/Donation/Donation";
import DonateAmount from "./src/screens/DonateAmount";
import SponsorAmount from "./src/screens/SponsorAmount";
import RecurringScreen from "./src/screens/RecurringScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StripeProvider } from "@stripe/stripe-react-native";
import PaymentContextProvider from "./src/context/PaymentContext";

// Stripe.setOptionsAsync({
//   publishableKey:
//     "pk_test_51N6SokEyrZyjTHe0PcPSXjZLwXWjD3lFXpHhyS5YZNbilUmZ7uP9VXOHVXDxqfOUvC9pdBcpA9A3nsrgQnsCdXsa00kHybSWpm",
// });

const STRIPE_KEY =
  "pk_test_51Mu6dqSDBZxcxSvsHVgkMNjOuy0jd9ftGOKsdX3AB41oyLFpMadrKpnCTKdHHRceaO6DpdCRVaQMcJm0cVKoFHaS00Hij31NnS";
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_51N6SokEyrZyjTHe0PcPSXjZLwXWjD3lFXpHhyS5YZNbilUmZ7uP9VXOHVXDxqfOUvC9pdBcpA9A3nsrgQnsCdXsa00kHybSWpm">
      <PaymentContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SigninScreen" component={SigninScreen} />
            <Stack.Screen name="DonationBoard" component={DonationBoard} />
            <Stack.Screen name="Donation" component={Donation} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="SponsorScreen" component={SponsorScreen} />
            <Stack.Screen name="DonateAmount" component={DonateAmount} />
            <Stack.Screen name="SponsorAmount" component={SponsorAmount} />
            <Stack.Screen name="RecurringScreen" component={RecurringScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaymentContextProvider>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
