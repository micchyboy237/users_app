import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import UserItem from './UserItem';
import useUsers from './useUsers';

const UsersScreen = (props) => {
  const usersQuery = useUsers();

  const handlePress = (item) => () => {
    props.navigation.navigate('UserDetails', item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={usersQuery.data}
        renderItem={({item}) => (
          <UserItem item={item} onPress={handlePress(item)} />
        )}
        ListFooterComponent={() =>
          usersQuery.loading ? (
            <ActivityIndicator animating={true} size="small" />
          ) : (
            !usersQuery.data?.length && <Text>No results found</Text>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UsersScreen;
