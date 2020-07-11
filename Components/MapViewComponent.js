import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const MapViewComponent = props => {
  const [mylongitude, setlongitude] = useState(74.279536);
  const [mylatitude, setlatitude] = useState(31.445078);

  const [locationFetched, setlocationFetched] = useState(false);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant location permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };
  useEffect(() => {
    async function getLocationHandler() {
      const hasPermission = await verifyPermissions();
      if (!hasPermission) {
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({
          timeout: 5000,
          maximumAge: 5000
        });
        setlongitude(location.coords.longitude);
        setlatitude(location.coords.latitude);
        setlocationFetched(true);
      } catch (err) {
        Alert.alert(
          'Could not fetch location!',
          'Please try again later.',
          [{ text: 'Okay' }]
        );
        setlocationFetched(false);
      }
    }
    getLocationHandler();
  }, []);

  const mapRegion = {
    latitude: mylatitude + 0.004,
    longitude: mylongitude,
    latitudeDelta: 0.005,
    longitudeDelta: 0.0152
  }

  return (
    <MapView
    region={mapRegion}
    showsUserLocation={true}
    style={styles.map}
  >
    {!locationFetched && <Marker coordinate={{ latitude: mapRegion.latitude - 0.004, longitude: mapRegion.longitude + 0.00019 }} />}
  </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-end'
  }
})

export default MapViewComponent;









// const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  // const [mylongitude, setlongitude] = useState(74.279536);
  // const [mylatitude, setlatitude] = useState(31.445078);

  // useEffect(() => {
  //   if (Platform.OS === 'android' && !Constants.isDevice) {
  //     setErrorMsg(
  //       'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
  //     );
  //   } else {
  //     (async () => {
  //       let { status } = await Location.requestPermissionsAsync();
  //       if (status !== 'granted') {
  //         setErrorMsg('Permission to access location was denied');
  //       }

  //       let location = await Location.getCurrentPositionAsync({});
  //       setLocation(location);
  //     })();
  //   }
  // });

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location.coords.longitude);
  //   setlongitude(location.coords.longitude);
  //   setlatitude(location.coords.longitude);
  // }
