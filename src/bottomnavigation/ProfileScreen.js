import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import ProfileComponent from "../component/ProfileComponent";
import LoginProfileComponent from "../component/LoginProfileComponent";
import ProfileDetailComponent from "../component/ProfileDetailComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelpModel from '../models/HelpModel';


const ProfileScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView >

                {/* <LoginProfileComponent /> */}

                <ProfileDetailComponent name={'Mithun Kumar'} mobile={'+91 9988776655<'} since={'Member since Jul 2019'} />

                <View style={styles.scrollview}>

                    <View style={styles.subtitleView}>
                        <Text style={styles.SubTitleText}>My details</Text>
                        <ProfileComponent title={'Booking History'} image={require('../assets/Booking.png')} onPress={console.log('clicked')} />
                        <ProfileComponent title={'Cancel Booking'} image={require('../assets/CancelBooking.png')} onPress={console.log('clicked')} />
                        <ProfileComponent title={'Personal Informationy'} image={require('../assets/PersonalInfo.png')} onPress={console.log('clicked')} />
                        <ProfileComponent title={'Passengers'} image={require('../assets/passenger.png')} onPress={console.log('clicked')} />
                    </View>

                    <View style={styles.subtitleView}>
                        <Text style={styles.SubTitleText}>Payments</Text>
                        <ProfileComponent title={'Tbs Wallet '} image={require('../assets/tbswallet.png')} onPress={console.log('clicked')} />
                        <ProfileComponent title={'Payment Methods'} image={require('../assets/paymentmethods.png')} onPress={console.log('clicked')} />
                        <ProfileComponent title={'GST Details'} image={require('../assets/gstdetails.png')} onPress={console.log('clicked')} />
                    </View>

                    <View style={styles.subtitleView}>
                        <Text style={styles.SubTitleText}>More</Text>
                        <ProfileComponent title={'Offers'} image={require('../assets/offers.png')} onPress={console.log('clicked')} />
                        <ProfileComponent title={'Referrals'} image={require('../assets/referral.png')} onPress={console.log('clicked')} />
                        <ProfileComponent title={'Know about us'} image={require('../assets/aboutus.png')} onPress={console.log('clicked')} />
                        <ProfileComponent title={'Rate app'} image={require('../assets/rateapp.png')} onPress={console.log('clicked')} />
                        <ProfileComponent title={'Help'} image={require('../assets/help.png')} onPress={() => setModalVisible(true)} />
                        <ProfileComponent title={'Account Settings'} image={require('../assets/settings.png')} onPress={console.log('clicked')} />
                    </View>

                    <View style={styles.subtitleView}>
                        <Text style={styles.SubTitleText}>Preferences</Text>
                        <ProfileComponent title={'Country'} value={'India'} image={require('../assets/india.png')} onPress={console.log('clicked')} />
                        <ProfileComponent title={'Currency'} value={'INR'} image={require('../assets/currency.png')} onPress={console.log('clicked')} />
                        <ProfileComponent title={'Language'} value={'English'} image={require('../assets/lang.png')} onPress={console.log('clicked')} />
                        <ProfileComponent title={'Booking for women'} value={'No'} image={require('../assets/women.png')} onPress={console.log('clicked')} />
                    </View>
                </View>
            </ScrollView>

            <HelpModel
                visible={modalVisible}
                closeModel={() => {
                    setModalVisible(false)

                }}

            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E5FFF1',

    },
    scrollview: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    dividerView: {
        borderBottomColor: '#1F487C',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginLeft: 20,
        marginRight: 20
    },
    subtitleView: {
        // padding: 10,
        // paddingRight: 10,
        marginTop: 20,
        display: 'flex',
        gap: 20
    },
    SubTitleText: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 20,
        color: '#1F487C'
    }

})

export default ProfileScreen