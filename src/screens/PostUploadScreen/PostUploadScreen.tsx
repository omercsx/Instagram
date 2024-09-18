import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraView, type CameraType } from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PostUploadScreen = () => {
  const [facing, setFacing] = useState<CameraType>('back');
  const [flash, setFlash] = useState<'on' | 'off'>('off');
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    };
    getPermission();
  }, []);

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const toggleFlash = () => {
    setFlash(current => (current === 'on' ? 'off' : 'on'));
  };

  if (hasPermission === null) {
    return (
      <View style={styles.page}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.page}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <CameraView style={styles.camera} facing={facing} flash={flash}>
        <View style={[styles.buttonsContainer, { top: 10 }]}>
          <TouchableOpacity>
            <MaterialIcons name="close" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFlash}>
            <MaterialIcons
              name={flash === 'on' ? 'flash-on' : 'flash-off'}
              size={30}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="settings" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonsContainer, { bottom: 10 }]}>
          <TouchableOpacity>
            <MaterialIcons name="photo-library" size={30} color="white" />
          </TouchableOpacity>
          <View style={styles.circle} />
          <TouchableOpacity onPress={toggleCameraFacing}>
            <MaterialIcons name="flip-camera-ios" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default PostUploadScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },

  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: 'white',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
  },
});
