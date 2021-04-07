import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { jobListItemStyle } from '../styles';

const JobSaveItem = (props) => {
  return (

    <View
      style={jobListItemStyle.container}
      onPress={props.onSelect}
    >
      <Text style={jobListItemStyle.jobname}>{props.job.title}</Text>
      <Text>{props.job.type} / {props.job.location}</Text>

      <TouchableOpacity
        style={jobListItemStyle.returnButton}
        onPress={props.onDeleteItem}
      >
        <Text style={jobListItemStyle.textButton}>Delete</Text>

      </TouchableOpacity>
    </View>
  );
};

export { JobSaveItem };
