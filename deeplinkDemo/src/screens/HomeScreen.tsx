import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Text, FlatList, Pressable} from 'react-native';

import Separator from '../components/Separator';

const HomeScreen = ({navigation}: any) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        setData(res);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderList = ({item}: any) => {
    return (
      <Pressable
        // onPress={() => alert('Navigate to Details screen xd')}
        onPress={() =>
          navigation.navigate('Details', {personDetailsId: item.id})
        }
        style={{paddingHorizontal: 10}}>
        <Text style={{fontSize: 24, color: '#000'}}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <>
          <FlatList
            data={data}
            contentContainerStyle={{
              paddingVertical: 20,
            }}
            keyExtractor={(item: any) => item.id}
            ItemSeparatorComponent={Separator}
            renderItem={renderList}
          />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
