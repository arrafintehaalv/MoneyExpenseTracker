import Moment from 'moment';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

function ExpenseLoggerScreen () {
    const [category, setCategory] = useState(false);
    const [month, setMonth] = useState(false);
    const [week, setWeek] = useState(false);
    const [searchText, setSearchText] = useState("");
    const categoryArray = useSelector(state => state.categoryObject.categoryArr);
    const [categoryList, setCategoryList] = useState(categoryArray);

    const weekDays = {
        "1": "Monday",
        "2": "Tuesday",
        "3": "Wednesday",
        "4": "Thursday",
        "5": "Friday",
        "6": "Saturday",
        "7": "Sunday"

    }

    const filterByCategory = () => {
        if (!category) {
            setCategory(true);
            setMonth(false);
            setWeek(false);
        }
        else {
            setCategory(false);
            setMonth(false);
            setWeek(false);
        }
    }

    const filterByMonth = () => {
        if (!month) {
            setCategory(false);
            setMonth(true);
            setWeek(false);
        }
        else {
            setCategory(false);
            setMonth(false);
            setWeek(false);
        }
    }

    const filterByWeek = () => {
        if (!week) {
            setCategory(false);
            setMonth(false);
            setWeek(true);
        }
        else {
            setCategory(false);
            setMonth(false);
            setWeek(false);
        }
    }

    const setExpense = (value) => {
        setSearchText(value);
        if (month) {
            setCategoryList(categoryArray.filter((item) => item.date.slice(3, 5).includes(value)));
        }
        else if (week) {

            let categoryArrFilter = categoryArray.filter((item) => {
                let dd = item.date.slice(0, 2);
                let mm = item.date.slice(3, 5);
                let yyyy = item.date.slice(6);
                let date = Moment(yyyy + "-" + mm + "-" + dd);
                const dow = date.day();
                console.log(weekDays[dow]);
                return (
                    value.toLowerCase() == weekDays[dow].toLowerCase()
                )
                
            })
            setCategoryList(categoryArrFilter);
        }
        else if (category) {
            
            setCategoryList(categoryArray.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())));
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.upperView}>
            <View style={styles.filterView}>
                <Text>Filter By: </Text>
                <TouchableOpacity style={[styles.filterBtn, {backgroundColor: month ? "green" : "gray"}]} onPress={() => filterByMonth()}><Text>Month</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.filterBtn, {backgroundColor: week ? "green" : "gray"}]} onPress={() => filterByWeek()}><Text>Week</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.filterBtn, {backgroundColor: category ? "green" : "gray"}]} onPress={() => filterByCategory()}><Text>Category</Text></TouchableOpacity>
                </View>
                <View style={styles.searchView}>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setExpense(value)}
                    value={searchText}
                    placeholder="Search"
                    keyboardType="default"
                    maxLength={30}
                />
                </View>
            </View>
            <ScrollView>
                <View style={styles.viewContainer}>
                    <Text>Name</Text>
                    <Text>Amount </Text>
                    <Text>Date</Text>
                </View>
                {categoryList.length > 0 && categoryList.map((item) => {
                    return (
                        <View style={styles.viewContainer}>
                            <Text>{item.name}</Text>
                            <Text>{item.amount}</Text>
                            <Text>{item.date}</Text>
                        </View>
                    )
                }
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20
    },
    text: {
        fontSize: 20
    },
    filterView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    filterBtn: {
        backgroundColor: "green",
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    searchView: {
        height: 40,
        width: '50%',
        margin: 12,
        borderWidth: 1,
        padding: 10,

    },
    upperView: {
        height: 100,
        backgroundColor: 'cyan',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ExpenseLoggerScreen;