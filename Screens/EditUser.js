
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Permissions from 'expo-permissions'; // Import Permissions from Expo


const EditUser = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [avatar, setAvatar] = useState(null);

  const navigation = useNavigation();

  const handleEditUser = () => {
  };

  const handleGoBack = () => {
    navigation.navigate('Home');
  };

  const handleChooseImage = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      const { status: newStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (newStatus !== 'granted') {
        // Xử lý trường hợp người dùng không cấp quyền
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      // Use the assets array to access selected images
      const selectedImage = result.assets[0];
      setAvatar(selectedImage.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={20}
          color="#000"
          onPress={handleGoBack}
        />
        <Text style={styles.headerTitle}>Chỉnh sủa hồ sơ</Text>
      </View>
      <ScrollView >

        <TouchableOpacity onPress={handleChooseImage}>
          {avatar ? (
            <Image source={{ uri: avatar }} style={styles.avatar} />
          ) : (
            <Image source={require('../assets/default-avatar.png')} style={styles.avatar} />
          )}
          <View style={styles.changeAvatarTextContainer}>
            <Icon name="pencil" size={20} color="#000" style={styles.editIcon} />

            <Text style={styles.changeAvatarText}>Thay đổi ảnh đại diện</Text>
          </View>
        </TouchableOpacity>


        <Text style={styles.label}>Tên:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.label}>Số điện thoại:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Địa chỉ:</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />

        <View marginBottom={90} style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#000" }]}
            onPress={handleEditUser}
          >
            <Text style={styles.buttonText}>Lưu</Text>
          </TouchableOpacity>
          <View style={{ width: 10 }} />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FF0000" }]}
            onPress={() => {/* Handle Cancel */ }}
          >
            <Text style={styles.buttonText}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
    alignSelf: 'center',
  },
  changeAvatarTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  changeAvatarText: {
    textAlign: 'center',
    color: '#0066CC',
    textDecorationLine: 'underline',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  picker: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#E0E0E0"
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pickerColumn: {
    flex: 1,
  },
  pickerDC: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#E0E0E0",
  },

  button: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    height: 30
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 150,

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 300
  },
  inputContainer: {
    marginBottom: 25,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
export default EditUser;
