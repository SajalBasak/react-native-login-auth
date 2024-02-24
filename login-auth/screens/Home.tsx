import { StyleSheet, Text, TextInput, View, ActivityIndicator, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/AuthSlice';

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});
