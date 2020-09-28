import * as React from 'react';
import {View, ScrollView} from 'react-native';
import ListViewEvents from '../components/listViewEvents';

const data = [
  {
    title: 'Koşmaya Var Mısın?',
    place: 'Üsküdar-Kadıköy',
    start: '08:00 Üsküdar Meydan',
    date: '26.10.2020i Pazar',
    finish: '10:00 Kadıköy Rıhtım',
    user: 'ForrestFump',
  },
  {
    title: 'Pedal Çeviriyoruz Bacakları Yakıyoruz',
    place: 'Maltepe-Tuzla',
    start: '07:00 Maltepe Sahil',
    date: '29.10.2020, Pazar',
    finish: '11:00 Tuzla Marina',
    user: 'PedalAtan',
  },
  {
    title: 'Tenis Oynayalım',
    place: 'Maltepe',
    start: '08:00',
    date: '26.10.2020i Cumartesi',
    finish: '10:00',
    user: 'Sharapova87',
  },
  {
    title: 'Koşmaya Var Mısın?',
    place: 'Üsküdar-Kadıköy',
    start: '08:00 Üsküdar Meydan',
    date: '26.10.2020i Pazar',
    finish: '10:00 Kadıköy Rıhtım',
    user: 'ForrestFump',
  },
  {
    title: 'Pedal Çeviriyoruz Bacakları Yakıyoruz',
    place: 'Maltepe-Tuzla',
    start: '07:00 Maltepe Sahil',
    date: '29.10.2020, Pazar',
    finish: '11:00 Tuzla Marina',
    user: 'PedalAtan',
  },
];

const HomeScreen = () => {
  const items = data.map((item, index) => (
    <ListViewEvents data={item} index={index} />
  ));

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {items}
    </View>
  );
};

export default HomeScreen;
