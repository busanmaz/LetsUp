import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const listViewEvents = (props: any) => {
  const {title, place, start, date, finish, user} = props.data;
  const {index} = props;

  return (
    <View
      style={
        index % 2 === 0
          ? styles.mainFrame
          : [styles.mainFrame, {backgroundColor: '#ccc'}]
      }>
      <View style={styles.leftFrame}>
        <Image
          style={styles.logoEvent}
          source={require('../assets/img/run.png')}
        />
      </View>
      <View style={styles.rightFrame}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Text style={styles.titleRow}>Yer:</Text>
          <Text style={styles.textRow}>{place}</Text>
          <Text style={styles.titleRow}>Baş.:</Text>
          <Text style={styles.textRow}>{start}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.titleRow}>Tarih:</Text>
          <Text style={styles.textRow}>{date}</Text>
          <Text style={styles.titleRow}>Bit.:</Text>
          <Text style={styles.textRow}>{finish}</Text>
        </View>
        <View style={styles.rowIcon}>
          <Image
            style={styles.logoUser}
            source={require('../assets/img/user.png')}
          />
          <Text style={styles.iconText}>{user}</Text>
        </View>
      </View>
    </View>
  );
};

export default listViewEvents;

const styles = StyleSheet.create({
  mainFrame: {
    // flex: 1,
    flexDirection: 'row',
    height: 150,
  },
  leftFrame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow'
  },
  rightFrame: {
    flex: 4,
    // backgroundColor: 'purple'
  },
  logoEvent: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  logoUser: {
    width: '20%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  titleRow: {
    flex: 3,
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  iconText: {
    flex: 3,
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 5,
  },
  textRow: {
    flex: 8,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 5,
  },
  rowIcon: {
    flexDirection: 'row',
    flex: 1,
  },
});
