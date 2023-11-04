import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const books = [
    { title: 'Book 1', name: 'Hiểu về trái tim', author: 'Author 1', status: 'In Progress', ratingUser: 4, image: "https://static.tuoitre.vn/tto/i/s626/2010/08/11/TWY8t5ap.jpg" },
    { title: 'Book 2', name: 'Hiểu về trái tim', author: 'Author 2', status: 'In Progress', ratingUser: 4, image: "https://static.tuoitre.vn/tto/i/s626/2010/08/11/TWY8t5ap.jpg" },

];

const Search = () => {
    const [query, setQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(books);

    const handleSearch = (text) => {
        // chuyển sang chữ thường và xóa khoảng trắng
        const normalizedQuery = text.toLowerCase().replace(/\s/g, '');

        // Filter sách dựa trên tiêu đề, tên và tác giả 
        const filteredResults = books.filter((book) => {
            const normalizedTitle = book.title.toLowerCase().replace(/\s/g, '');
            const normalizedName = book.name.toLowerCase().replace(/\s/g, '');
            const normalizedAuthor = book.author.toLowerCase().replace(/\s/g, '');

            return (
                normalizedTitle.includes(normalizedQuery) ||
                normalizedName.includes(normalizedQuery) ||
                normalizedAuthor.includes(normalizedQuery)
            );
        });

        setQuery(text);
        setFilteredBooks(filteredResults);
    };

    return (
        <View>

            <View style={{ borderWidth: 2, borderColor: 'black', flexDirection: 'row', alignItems: 'center', marginTop: 20, width: '90%', marginLeft: 20, borderRadius: 40, height: 40 }}>
                <Icon name="search" size={20} color="black" style={{ marginHorizontal: 10 }} />
                <TextInput
                    style={{ flex: 1 }}
                    placeholder="Search books"
                    onChangeText={handleSearch}
                    value={query}
                />
            </View>
            <FlatList
                style={{ marginTop: 20 }}
                data={filteredBooks}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderColor: 'black', width: 380, marginLeft: 5, marginRight: 5, borderRadius: 10 }}>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 100, height: 100, marginRight: 10, borderRadius: 10 }}
                        />
                        <View >
                            <Text style={{ marginBottom: 5 }}>{`${item.title} - ${item.name}`}</Text>
                            <Text style={{ marginBottom: 5 }}>{`Tác giả: ${item.author}`}</Text>
                            <Text style={{ marginBottom: 5 }}>{`Status: ${item.status}`}</Text>
                            <Text>{`Đánh giá người đăng: ${item.ratingUser}`}
                                <Icon
                                    name="star"
                                    size={15}
                                    color="#f1c40f"
                                />
                            </Text>

                        </View>
                    </View>
                )}
            />
        </View>
    );
};



export default Search;
