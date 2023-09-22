/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native';
import { colors, parameters } from '../global/styles';
import { Icon, CheckBox } from 'react-native-elements';
import Header from '../../components/Header';
import { title } from '../../global/styles';


export default function TouristsDetails() {
    const [mahabodhiya,setMahabodhiya] = useState(false);
    const [lowamahaapaya, setLowamahaapaya] = useState(false);
    const [ruwanwalimahaa, setRuwanwalimahaa] = useState(false);

    const places = []

    const click = () =>{
        if (mahabodhiya === true){
            places.push("mahabodhiya")
        }
        if (lowamahaapaya === true) {
            places.push("lowamahaapaya")
        }
        if (ruwanwalimahaa === true) {
            places.push("ruwanwalimahaa")
        }
    }
    return (
        <View style={styles.container}>
            <Header title="MY ACCOUNT" type="arrow-left" />
            <ScrollView style={styles.container}>
                <View style={{ alignItems: "center", marginTop: 10 }}>
                    <Text style={title}>Tourists Details</Text>
                </View>
                <View>
                    <Text style={styles.text1}>Enter number of people</Text>
                </View>
                <View>
                    <View>
                        <TextInput
                            style={styles.TextInput1}
                            placeholder="Number of people"
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.text1}>Enter age category</Text>
                </View>
                <View>
                    <View>
                        <TextInput
                            style={styles.TextInput1}
                            placeholder="Age"
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.text1}>Select health conditions</Text>
                </View>
                <View>
                    <View>
                        <TextInput
                            style={styles.TextInput1}
                            placeholder="Health conditions"
                        />
                    </View>
                </View>
                <CheckBox
                    title="Sri Mahabodhiya"
                    checked={mahabodhiya}
                    onPress={() => setMahabodhiya(!mahabodhiya)}
                />
                <CheckBox
                    title="Lowamahaapaya"
                    checked={lowamahaapaya}
                    onPress={() => setLowamahaapaya(!lowamahaapaya)}
                />
                <CheckBox
                    title="Ruwanwalimahaa saya"
                    checked={ruwanwalimahaa}
                    onPress={() => setRuwanwalimahaa(!ruwanwalimahaa)}
                />
                <CheckBox
                    title="Jeethawanaramaya"
                    checked={true}
                />
                <CheckBox
                    title="Thuparamaya"
                    checked={true}
                />
                <View>
                    <Text style={styles.text1}>Select place category</Text>
                </View>
                <View>
                    <View>
                        <TextInput
                            style={styles.TextInput1}
                            placeholder="Place category"
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.text1}>Select places according to the category</Text>
                </View>
                <View>
                    <View>
                        <TextInput
                            style={styles.TextInput1}
                            placeholder="Places according to the category"
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.text1}>Select Number of days</Text>
                </View>
                <View>
                    <View>
                        <TextInput
                            style={styles.TextInput1}
                            placeholder="Number of days"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        fontSize: 16,
        marginTop: 10,
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 12,
        borderRadius: 12,
        marginBottom: 5,
    },
    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
    }
})