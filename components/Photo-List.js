import React, { useEffect, useState } from "react"
import axios from 'axios';
import PhotoFlatList from "./PhotoFlatList";
import  { Text, View} from 'react-native';

function PhotoList(){

    const [state, setState] = useState({photos: null})

    useEffect(() => {
        axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${this.props.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
        )
        .then((response) =>
          setState({photos: response.data.photoset.photo}),
        );
    },[])

    return (
        state.photos 
        ? state.photos.map((photo) =>
            <PhotoFlatList title={photo.title} imageUrl={photo.imageUrl} ></PhotoFlatList>)
        :  
            <View style={{flex: 1}}>
            <Text>Loading...</Text>
            </View>
    )
}

export default PhotoList