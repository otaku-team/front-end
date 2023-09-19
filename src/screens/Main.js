import React, { useState } from "react";
import styled from "styled-components/native";
import { View, Text, Button, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

function CustomImageInput({ imageUri, onSelectImage }) {
  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Media Library permission denied");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      onSelectImage(result.uri);
    }
  };

  return (
    <TouchableOpacity onPress={selectImage}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 150, height: 150 }} />
      ) : (
        <PlaceholderText>Click to select an image</PlaceholderText>
      )}
    </TouchableOpacity>
  );
}

function Main({ navigation }) {
  const [image, setImage] = useState(null);

  const handleImageSelect = (uri) => {
    setImage(uri);
  };

  const uploadImage = async () => {
    // 이미지 업로드 로직 추가
  };

  return (
    <View>
      <MainScreenContainer>
        <LogoContainer>
          <LogoText>Otaku Moyeo</LogoText>
        </LogoContainer>
        <ImageContainer>
          <ImageBoxContainer>
            <InputText>Drop your images, browse or import from</InputText>
            <CustomImageInput
              imageUri={image}
              onSelectImage={handleImageSelect}
            />
          </ImageBoxContainer>
        </ImageContainer>
        <Button title="Submit" onPress={uploadImage} />
      </MainScreenContainer>
    </View>
  );
}

const MainScreenContainer = styled.View`
  background-color: #ffeaf4;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const LogoContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 296px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 50px;
`;

const LogoText = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const ImageBoxContainer = styled.View`
  background-color: #ffeaf4;
  width: 290px;
  height: 279px;
  border-radius: 10px;
  margin: auto;
`;

const ImageContainer = styled.View`
  background-color: white;
  width: 380px;
  height: 400px;
  border-radius: 10px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 50px;
`;

const InputText = styled.Text`
  margin-top: 100px;
  text-align: center;
`;

const PlaceholderText = styled.Text`
  text-align: center;
  color: #888;
`;

export default Main;
