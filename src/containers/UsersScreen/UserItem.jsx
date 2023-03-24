import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import Image from '../../components/Image';
import colors from '../../themes/colors';

const UserItem = ({item, onPress, isSelected, ...props}) => {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor={colors.silver}
      onPress={onPress}
      {...props}
    >
      <View style={styles.container}>
        <Image source={{uri: item.avatar}} style={styles.avatar} />

        <View>
          <Text style={styles.label}>
            {item.first_name + ' ' + item.last_name}
          </Text>
          <Text style={styles.subLabel}>{item.email}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 80,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lighterGray,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  subLabel: {
    color: colors.darkGray,
    fontSize: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: colors.lighterGray,
    backgroundColor: colors.lightestGray,
    marginRight: 20,
  },
});

UserItem.defaultProps = {
  underlayColor: colors.lighterGray,
};

export default UserItem;
