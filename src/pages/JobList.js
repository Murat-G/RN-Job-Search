import Axios from 'axios';
import Modal from 'react-native-modal';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, Text, View, FlatList, Button, TouchableOpacity, Alert} from 'react-native';

import { jobs } from '../styles';
import { JobListItem } from '../components';

const JobList = (props) => {
  const [data, setData] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [modalFlag, setModalFlag] = useState(false);
  const { selectedLanguage } = props.route.params;

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get(
        `https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`,
      );
      setData(response.data);
    };
    fetchData();
  }, [selectedJob, selectedLanguage]);


  const onJobSelect = (job) => {
    setModalFlag(true);
    setSelectedJob(job);
  };

  const renderJobs = ({ item }) => (
    <JobListItem job={item} onSelect={() => onJobSelect(item)} />
  );



  const onJobSave = async (item) => {
    let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
    savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList);

    let control = [];
    if (savedJobList.length === 0) {
      const updatedJobList = [...savedJobList, selectedJob];
      AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(updatedJobList), setModalFlag(false));
      Alert.alert('first job  is added. Keep going...');
    } else {
      savedJobList.map((i) => {
        if (i.id === selectedJob.id) {
          control.push(i.id);
        Alert.alert('the job is already exist. Please choose another job.');
        setModalFlag(false);
      }
      if (control.length === 0) {
          const updatedJobList = [...savedJobList, selectedJob];
          AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(updatedJobList), setModalFlag(false));
          Alert.alert('New job is added.');
        }
      });
    }
    control = [];
  };
  return (
    <SafeAreaView style={jobs.jobsContainer}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={jobs.backButton}
      >
        <Text style={jobs.jobsButtonText}>go back</Text>

      </TouchableOpacity>
      <View style={jobs.jobsView}>
        <Text
          style={jobs.jobsText}>
          JOBS FOR {selectedLanguage.toUpperCase()}
        </Text>

        <FlatList data={data} renderItem={renderJobs} />

        <TouchableOpacity
          style={jobs.jobsButton}
          onPress={() => props.navigation.navigate('JobSavePage')}
        >
          <Text style={jobs.jobsButtonText}>Kayıtlıları Gör</Text>

        </TouchableOpacity>

        <Modal isVisible={modalFlag} onBackdropPress={() => setModalFlag(false)}>
          <View style={jobs.modalBackground}>
            <View style={jobs.modalContainer}>
              <Text style={jobs.jobTitle}>{selectedJob.title}</Text>
              <Text>
                {selectedJob.location} / {selectedJob.title}
              </Text>
              <Text>{selectedJob.company}</Text>
            </View>
            <View style={jobs.jobDesc}>
              <Text numberOfLines={5}>{selectedJob.description}</Text>
            </View>
            <Button title="Kaydet" onPress={() => onJobSave(selectedJob)} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export { JobList };
