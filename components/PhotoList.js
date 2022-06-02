import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoDetail from "./PhotoDetail";
import {
  ActivityIndicator,
  FlatList,
  Text,
  ImageBackground,
  View,
} from "react-native";

function PhotoList(props) {
  const [state, setState] = useState({ photos: null });
  const getPhotos = async () => {
    let response;
    try {
      response = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`
      );
      setState({ photos: response.data.photoset.photo });
      console.log(response.data.photoset.photo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPhotos();
  }, []);

  return state.photos ? (
    <View>
      <ImageBackground source={require("../assets/background.png")} style={styles.container} resizeMode="cover">
        <FlatList
          data={state.photos}
          renderItem={({ item }) => (
            <PhotoDetail
              key={item.title}
              title={item.title}
              imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
            />
          )}
        ></FlatList>
      </ImageBackground>
    </View>
  ) : (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator
        animating={true}
        hidesWhenStopped={true}
        size={40}
        color={"#000000"}
      ></ActivityIndicator>
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
};

export default PhotoList;
