import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import ProfileComponent from '../component/ProfileComponent';

const DeleteAccountModel = ({ visible, onPress, closeModel }) => {



    return (
        <Modal animationType='slide' transparent={true} visible={visible}  >

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Confirm deletion</Text>
                    {/* <View style={styles.subView}> */}
                    <Text style={styles.subTitleText}>Are you sure you want to delete your account?</Text>
                    {/* </View> */}

                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.submitView} >
                            <Image />
                            <Text style={styles.submitText}>Yes, Delete</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={closeModel} style={styles.delView} >
                            <Image />
                            <Text style={styles.delText}>Go back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalView: {
        // height: 60,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 30,
        display: 'flex',
        gap: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        color: '#1F487C',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
    },
    subView: {
        // padding:30,
        // marginLeft: 35,
        // marginRight: 35,
        // backgroundColor: '#000'
    },
    subTitleText: {
        color: '#1F487C',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
    },
    buttonView: {
        gap: 10,
        paddingLeft: 30,
        paddingRight: 30,
        // backgroundColor: '#000'
    },
    submitView: {
        backgroundColor: '#1F487C',
        borderRadius: 25,
        padding: 15,
        marginLeft: 15,
        marginRight: 15
    },
    delView: {
        borderColor: '#1F487C',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 15,
        marginLeft: 15,
        marginRight: 15
    },
    submitText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    delText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: '#1F487C',
        textAlign: 'center'
    }
});

export default DeleteAccountModel;