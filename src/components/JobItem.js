import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import { jobItemStyle } from '../styles';

const JobItem = (props) => {
  return (
      <TouchableOpacity
        style={[jobItemStyle.container, { backgroundColor: `#${props.item.color}` }]}
        onPress={props.onSelect}
      >
          <Text style={jobItemStyle.text}>{props.item.name}</Text>
      </TouchableOpacity>
    );
};

export { JobItem };
