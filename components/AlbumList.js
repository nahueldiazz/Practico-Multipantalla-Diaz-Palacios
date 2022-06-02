import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, ActivityIndicator, ImageBackground} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


const AlbumList = ({navigation}) => {
  const [state, setState] = useState({ photoset: null })

  const componentWillMount = async () =>  {
    const response = await axios.get(
      'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1',
    )
      setState({photoset: response.data.photosets.photoset});
   console.log(response);
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

  const style = {
    textAlign: "center",
    fontSize: 38,
    marginTop: 230,
    marginBottom: 50
  }

  return (
    state.photoset ?
      <View style={[styles.container ]}>
        <ImageBackground source={require("../assets/background.png")}  resizeMode="cover">
        <FlatList
          data={state.photoset}
          renderItem={renderAlbums}
          keyExtractor={album => album.id}

        />
        </ImageBackground>
      </View> :
          <View style={[styles.containerLoader, styles.horizontal]}>
          <ActivityIndicator
            animating={true}
            hidesWhenStopped={true}
            size={40}
            color={"#000000"}
          ></ActivityIndicator>
        </View>
  )
};

const styles = {
  container: {
    flex: 1,
  },
  containerLoader: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
}

export default AlbumList;
