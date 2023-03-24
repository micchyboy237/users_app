import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Image from '../../components/Image';
import colors from '../../themes/colors';

const UserDetailsScreen = (props) => {
  const user = props.route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Image source={{uri: user.avatar}} style={styles.avatar} />
        </View>

        <View>
          <View style={styles.detailItem}>
            <Text style={styles.label}>Username</Text>
            <Text style={styles.value}>{user.username}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>First Name</Text>
            <Text style={styles.value}>{user.first_name}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Last Name</Text>
            <Text style={styles.value}>{user.last_name}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.value}>{user.phone_number}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.value}>{user.gender}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Birthday</Text>
            <Text style={styles.value}>{user.date_of_birth}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Social Insurance Number</Text>
            <Text style={styles.value}>{user.social_insurance_number}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Employment</Text>

            <View>
              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>Title:</Text>
                <Text style={styles.value}>{user.employment.title}</Text>
              </View>

              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>Key Skill:</Text>
                <Text style={styles.value}>{user.employment.key_skill}</Text>
              </View>
            </View>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Address</Text>

            <View>
              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>Street 1:</Text>
                <Text style={styles.value}>{user.address.street_address}</Text>
              </View>

              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>Street 2:</Text>
                <Text style={styles.value}>{user.address.street_name}</Text>
              </View>

              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>City:</Text>
                <Text style={styles.value}>{user.address.city}</Text>
              </View>

              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>State:</Text>
                <Text style={styles.value}>{user.address.state}</Text>
              </View>

              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>Country:</Text>
                <Text style={styles.value}>{user.address.country}</Text>
              </View>

              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>Zip Code:</Text>
                <Text style={styles.value}>{user.address.zip_code}</Text>
              </View>

              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>Lat:</Text>
                <Text style={styles.value}>{user.address.coordinates.lat}</Text>
              </View>

              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>Lng:</Text>
                <Text style={styles.value}>{user.address.coordinates.lng}</Text>
              </View>
            </View>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Credit Card</Text>

            <View style={styles.subDetailItem}>
              <Text style={styles.subLabel}>CC Number:</Text>
              <Text style={styles.value}>{user.credit_card.cc_number}</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Subscription</Text>

            <View>
              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>Plan:</Text>
                <Text style={styles.value}>{user.subscription.plan}</Text>
              </View>

              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>Status:</Text>
                <Text style={styles.value}>{user.subscription.status}</Text>
              </View>

              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>Payment Method:</Text>
                <Text style={styles.value}>
                  {user.subscription.payment_method}
                </Text>
              </View>

              <View style={styles.subDetailItem}>
                <Text style={styles.subLabel}>Term:</Text>
                <Text style={styles.value}>{user.subscription.term}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lighterGray,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: colors.lighterGray,
    backgroundColor: colors.lightestGray,
  },
  detailItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lighterGray,
  },
  label: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 6,
  },
  value: {
    fontSize: 13,
  },
  subDetailItem: {
    marginVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subLabel: {
    fontSize: 13,
    color: colors.textBlue,
    marginRight: 8,
  },
});

export default UserDetailsScreen;
