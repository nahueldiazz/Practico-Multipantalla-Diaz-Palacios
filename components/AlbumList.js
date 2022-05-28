import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, StatusBar} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


const AlbumList = ({navigation}) => {
  const [state, setState] = useState({ photoset: null })

  const componentWillMount = async () =>  {
    const response = await axios.get(
      'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1',
    )
      setState({photoset: response.data.photosets.photoset});
   
  }
  
  useEffect(() => {
    componentWillMount()
  }, [])
  
  const renderAlbums = ({item}) => {
      return <AlbumDetail
        navigation={navigation}
        key={item.id}
        title={item.title._content}
        albumId={item.id}
      />
    
  }

  return (
    state.photoset ?
      <View>
        <FlatList
          data={state.photoset}
          renderItem={renderAlbums}
          keyExtractor={album => album.id}
        />
      </View> :
      <Text>Loading...</Text>
  )
}

export default AlbumList;
