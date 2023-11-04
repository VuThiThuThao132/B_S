
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';//npm install @react-native-picker/picker@2.4.10 
import * as ImagePicker from 'expo-image-picker';//npm install expo-image-picker
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const AddToStorageScreen = () => {
    const [author, setAuthor] = useState('');
    const [images, setImages] = useState([]);

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('vanhoc');
    const [selectedDistrict, setSelectedDistrict] = useState('district1');
    const [selectedCity, setSelectedCity] = useState('hochiminh');

    const navigation = useNavigation();

    const handleAddToStorage = () => {

    };

    const handleGoBack = () => {
        navigation.navigate('AddToStorage');
    };
    const selectImages = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
        });

        if (!result.canceled) {
            setImages(result.assets.map((asset) => asset.uri));
        }
    };
    const removeImage = (imageId) => {
        // Filter hình ảnh đã chọn với ID đã cho
        const updatedImages = images.filter((image) => image.id !== imageId);
        setImages(updatedImages);
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
                <Text style={styles.headerTitle}>Thêm vào kho</Text>
            </View>
            <ScrollView >
                <Text style={styles.label}>Ảnh sách:</Text>
                <ScrollView horizontal style={{ marginBottom: 20 }}>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                            style={styles.image}
                        />

                    ))}

                </ScrollView>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: "#757575", flex: 1, height: 44 }]}
                        onPress={selectImages}
                    >
                        <Text style={[styles.buttonText]}>Chọn ảnh muốn đăng</Text>
                    </TouchableOpacity>
                    <View style={{ width: 10 }} />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: "#FF0000", flex: 0.5, height: 44 }]}
                        onPress={() => removeImage(images.id)}
                    >
                        <Text style={styles.buttonText}>Hủy</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Tiêu đề:</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
                <Text style={styles.label}>Tác giả:</Text>
                <TextInput
                    style={styles.input}
                    value={author}
                    onChangeText={(text) => setAuthor(text)}
                />

                <Text style={styles.label}>Mô tả thêm về sách:</Text>
                <TextInput
                    style={styles.input}
                    value={status}
                    onChangeText={(text) => setStatus(text)}
                />

                <Text style={styles.label}>Thể loại:</Text>
                <Picker
                    selectedValue={selectedCategory}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
                >
                    <Picker.Item label="Văn học" value="vanhoc" />
                    <Picker.Item label="Lịch sử" value="lichsu" />
                    <Picker.Item label="Địa lý" value="diali" />
                    <Picker.Item label="Toán" value="toan" />
                </Picker>

                <View style={styles.pickerContainer}>
                    <View style={styles.pickerColumn}>
                        <Text style={styles.label}>Quận/Huyện:</Text>
                        <Picker
                            selectedValue={selectedDistrict}
                            style={styles.pickerDC}
                            onValueChange={(itemValue, itemIndex) => setSelectedDistrict(itemValue)}
                        >
                            <Picker.Item label="District 1" value="district1" />
                            <Picker.Item label="District 2" value="district2" />
                        </Picker>
                    </View>
                    <View style={{ width: 10 }} />
                    <View style={styles.pickerColumn}>
                        <Text style={styles.label}>Tỉnh/Thành phố:</Text>
                        <Picker
                            selectedValue={selectedCity}
                            style={styles.pickerDC}
                            onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
                        >
                            <Picker.Item label="Hồ Chí Minh" value="hochiminh" />
                            <Picker.Item label="Hà Nội" value="hanoi" />
                        </Picker>
                    </View>
                </View>

                <View style={{ marginTop: 0, marginBottom: 25 }} >
                    <Text>----------------------------------------------------------------------------------------</Text>
                    <Text>Mô tả chi tiết.</Text>
                    <Text>Tình trạng của sách.</Text>
                    <Text>Mô tả thông tin sách.</Text>
                    <Text>Chính sách đổi trả, sách muốn trao đổi</Text>
                    <Text>----------------------------------------------------------------------------------------</Text>

                </View>

                <View marginBottom={90} style={styles.actionButtonsContainer}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: "#000" }]}
                        onPress={handleAddToStock}
                    >
                        <Text style={styles.buttonText}>Thêm vào kho</Text>
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
    image: {
        width: 200,
        height: 200,
        marginRight: 10,
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

export default AddToStorageScreen;
