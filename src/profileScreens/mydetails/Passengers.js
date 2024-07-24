import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import ProfileComponent from "../../component/ProfileComponent";


const Passengers = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

                <View style={styles.view}>
                    <View style={styles.detailView}>
                        <ProfileComponent title={'Mithun Kumar'} value={'Male, 24 years'} titleStyle={styles.titleStyle} valueStyle={styles.valueStyle} />
                        <ProfileComponent title={'Mithun '} value={'Male, 27 years'} titleStyle={styles.titleStyle} valueStyle={styles.valueStyle} />

                    </View>

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
        justifyContent: 'space-between',
    },
    scrollView: {
        // marginTop: 20,
        // display: 'flex',
        // flexDirection: 'column',
        padding: 20,
        // gap: 20,
    },
    view: {
        // flex: 1,
        display:'flex',
        justifyContent: 'space-between',
        height: 700,
        // backgroundColor: '#000',
    },
    detailView: {
        display: 'flex',
        gap: 20
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 20,
        color: '#1F487C'
    },
    valueStyle: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        color: '#1F487C'
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
export default Passengers