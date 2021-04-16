import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

export default function UserModal({ onPress, children }) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

UserModal.defaultProps = {
  children: null,
  onPress: () => { },
};

UserModal.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
