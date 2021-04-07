import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import { jobListItemStyle } from '../styles';

const JobListItem = (props) => {
  return (
      <TouchableOpacity
        style={jobListItemStyle.container}
        onPress={props.onSelect}
      >
          <Text style={jobListItemStyle.jobname}>{props.job.title}</Text>
          <Text>{props.job.type} / {props.job.location}</Text>
      </TouchableOpacity>
    );
};

export {JobListItem};
