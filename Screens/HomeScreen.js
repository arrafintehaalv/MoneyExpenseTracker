import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { connect, useSelector } from 'react-redux';

function HomeScreen(props) {
    const totalSum = useSelector(state => state.counter.expense)
    const categoryObject = useSelector(state => state.categoryObject)
    console.log("categoryObject", categoryObject)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewContainer}>
                <Text>Your Total Expense: {totalSum}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

export default HomeScreen;