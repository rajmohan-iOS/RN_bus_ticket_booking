import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import ProfileScreen from '../bottomnavigation/ProfileScreen';
import HelpScreen from '../bottomnavigation/HelpScreen';
import BottomTabs from './BottomTabs';
import PersonalInformation from '../profileScreens/mydetails/PersonalInformation';
import Passengers from '../profileScreens/mydetails/Passengers';



const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator>
                <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
                <Stack.Screen  name="HelpScreen" component={HelpScreen}  options={{ headerShown: true, headerTitle: 'Help & Support', headerTitleStyle: {color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20}, headerStyle: {backgroundColor: '#1F487C'} }} />
                <Stack.Screen  name="PersonalInformation" component={PersonalInformation}  options={{  headerShown: true, headerTitle: 'Personal Information', headerBackTitle: ' ', headerTitleStyle: {color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20}, headerStyle: {backgroundColor: '#1F487C' } }} />
                <Stack.Screen  name="Passengers" component={Passengers}  options={{ headerShown: true, headerTitle: 'Passengers', headerBackTitle: ' ', headerTitleStyle: {color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 20}, headerStyle: {backgroundColor: '#1F487C' } }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;