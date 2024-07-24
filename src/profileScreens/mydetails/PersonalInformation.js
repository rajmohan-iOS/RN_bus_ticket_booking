import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import PersonalDetailsComponent from "../../component/PersonalDetailsComponent";
import ContactDetailsComponent from "../../component/ContactDetailsComponent";

const PersonalInformation = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} >

                <View style={styles.scrollView}>
                    <PersonalDetailsComponent />

                    <ContactDetailsComponent />

                    <TouchableOpacity style={styles.submitView} >
                    <Image />
                    <Text style={styles.submitText}>Add new passenger</Text>
                </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5FFF1',
    },
    scrollView: {
        // marginTop: 10,
        display: 'flex',
        padding: 10,
        gap: 20
    },
    submitView: {
        backgroundColor: '#1F487C',
        borderRadius: 25,
        padding: 15,
    },
    submitText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#FFFFFF',
        textAlign: 'center'
    }

})
export default PersonalInformation