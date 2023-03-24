import React from 'react';
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
            <ActivityIndicator
              style={styles.loader}
              animating={true}
              size="small"
            />
          ) : (
            !usersQuery.data?.length && (
              <Text style={styles.emptyMessage}>No results found</Text>
            )
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
  loader: {
    marginTop: '10%',
  },
  emptyMessage: {
    marginTop: '10%',
    textAlign: 'center',
  },
});

export default UsersScreen;
