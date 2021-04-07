import React from 'react';
import {SafeAreaView, Text,View,ScrollView} from 'react-native';
import {JobItem} from '../components';

import {introduction} from '../styles';


const Home = (props) => {

  function selectLanguage(lang){
    props.navigation.navigate('JobListPage', { selectedLanguage: lang });
  }

  return (
    <SafeAreaView style={introduction.bannerContainer}>
    <View style={introduction.bannerContent}>
      <View style={introduction.banner}>
          <Text style={introduction.bannerText}> Aradığınız dili seçiniz...</Text>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={introduction.bannerScroll}
        showsHorizontalScrollIndicator={false}
      >
          {
            jobTitles.map(t=> {
              return <JobItem key={t.id} item={t} onSelect={() => selectLanguage(t.name)}  />;
            })
          }
      </ScrollView>
    </View>
  </SafeAreaView>
  );
};

export {Home};

const jobTitles = [
  {
    id: 0,
    name: 'Java',
    color: 'fb5607',
  },
  {
    id: 1,
    name: 'Python',
    color: '007f5f',
  },
  {
    id: 2,
    name: 'Javascript',
    color: 'ffb703',
  },
  {
    id: 3,
    name: '.NET',
    color: '023e7d',
  },
  {
    id: 4,
    name: 'Dart',
    color: '001845',
  },
  {
    id: 5,
    name: 'Go',
    color: 'f8961e',
  },
  {
    id: 6,
    name: 'Ruby',
    color: 'e63946',
  },
  {
    id: 7,
    name: 'C',
    color: 'fb8b24',
  },
  {
    id: 8,
    name: 'C++',
    color: '06d6a0',
  },
];
