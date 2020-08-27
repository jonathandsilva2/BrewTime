import React, { useContext } from 'react';
import { DatesContext } from '../context/DatesContext';
import { useQuery } from '@apollo/react-hooks';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GET_TOURS } from '../api/queries';

export default function Tours(props) {
  const { loading, error, data } = useQuery(GET_TOURS);
  const tourInfo = data.getBookings;
  console.log('Tour: ', tourInfo);
  const dateContext = useContext(DatesContext);

  console.log('alldates: ');

  // To get an array of dates of all bookings that will be stored in a global context to be used in the Calender component

  if (!tourInfo) {
    return <Text>loading....</Text>;
  } else {
    const newDates = tourInfo.map((input) => {
      return input.time;
    });

    console.log(newDates);

    const formatedDate = (input) => {
      return moment(input).format('YYYY-MM-DD');
    };

    const finalDates = newDates.map(formatedDate);

    console.log('Dates Array;', finalDates);

    const newDateArray = finalDates.reduce((acc, date) => {
      console.log(acc);
      acc[date] = { selected: 'true' };
      return acc;
    }, {});

    console.log('Final Dates Array:', newDateArray);

    if (!Object.keys(dateContext.dates).length) {
      dateContext.setDates(newDateArray);
    }

    return (
      <ScrollView styles={styles.container}>
        <Text>Available Tours</Text>

        {tourInfo.map((tour, i) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('BookingInfo', tour)}
            title="Go"
            style={styles.button}
          >
            <View style={styles.mapBox} key={i}>
              <View style={styles.tourMeta}>
                <Text style={styles.title}>{tour.title}</Text>
                <Text style={styles.guide}>Hosted by: {tour.guide}</Text>

                <Text style={styles.date}>{formatedDate(tour.time)}</Text>
              </View>
              <View
                style={{
                  justiftyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon
                  color="white"
                  name="angle-right"
                  size="30"
                  style={{ top: 13, fontFamily: 'Rajdhani-Regular' }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  borderBox: {
    borderWidth: 1,
    borderColor: 'red',
  },
  mapBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'Rajdhani-Bold',
    color: 'white',
    fontSize: 22,
  },
  guide: {
    fontFamily: 'Rajdhani-Regular',
    color: 'white',
    fontSize: 18,
  },
  date: {
    fontFamily: 'Rajdhani-Light',
    color: 'white',
    fontSize: 15,
  },
  button: {
    justifyContent: 'center',
  },
});
