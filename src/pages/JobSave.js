import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, Text } from 'react-native';

import { JobSaveItem } from '../components';
import { JobSaveItemStyle } from '../styles';

const JobSave = (props) => {
    const [jobList, setJobList] = useState([]);

    AsyncStorage.getItem('@SAVED_JOBS')
        .then(res => {
            const list = JSON.parse(res);
            setJobList(list);
    });

    const onDelete = async (job) => {
        const response = await AsyncStorage.getItem('@SAVED_JOBS');
        const list2 = JSON.parse(response);

        const newList = list2.filter((el) => {
            return (el.id !== job.id);
        });
        AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(newList));
        setJobList(newList);
    };

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity
                    style={JobSaveItemStyle.returnButton}
                    onPress={() => props.navigation.goBack()}
                >
                <Text style={JobSaveItemStyle.textButton}>go back</Text>

                </TouchableOpacity>
                <FlatList
                    data={jobList}
                    renderItem={({ item }) => <JobSaveItem job={item} onDeleteItem={() => onDelete(item)} />}
                />
            </View>
        </SafeAreaView>
    );
};

export { JobSave };
