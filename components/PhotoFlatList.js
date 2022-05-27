import React from 'react';
import {View, FlatList} from 'react-native';
import PhotoDetail from './PhotoDetail';

const PhotoFlatList = ({title, imageUrl}) => {

    return (
        <View style={{flex: 1}}>
            <FlatList data={
            <PhotoDetail
                key={title}
                title={title}
                imageUrl={imageUrl}
      />}>
            </FlatList>
        </View>
    )
}

export default PhotoFlatList