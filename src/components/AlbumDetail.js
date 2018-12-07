import React from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = ({ albumData }) => {
  const { title, artist, thumbnail_image, image } = albumData;
  const {
    textContainer,
    thumbnailStyle,
    textTitleStyle,
    thumbnailContainer,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={textContainer}>
          <Text style={textTitleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
    </Card>
  );
};

const styles = {
  textContainer: {
    justifyContent: "space-around",
    flexDirection: "column"
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  textTitleStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
