import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';
import  {  FlatList,Text, View} from 'react-native';

function PhotoList(props){

  const [state, setState] = useState({photos: null})
  const { loadingStyle, flatListStyle } = styles;
  const getPhotos = async () => {
      let response
      try {
          response = await axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
      )
      setState({photos: response.data.photoset.photo})
      console.log(response.data.photoset.photo)
      }
      catch (error){
          console.log(error)
      }
  }
  useEffect(() => {
      getPhotos()
  },[])

  return (
      state.photos 
      ? <FlatList data={state.photos} style={flatListStyle} renderItem={({item}) => 
          <PhotoDetail
          key={item.title}
          title={item.title}
          imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
          />
          }>
      </FlatList>
      :  
          <View style={loadingStyle}>
          <Text>Loading...</Text>
          </View>
  )
};
const styles = {
    loadingStyle: {
        alignSelf: "center",
        color: '#E2E2E2',
        fontSize: 38,
        marginTop: 230,
        marginBottom: 50
      },
      flatListStyle: {
          backgroundColor: '#E2E2E2'
      }
};


export default PhotoList
