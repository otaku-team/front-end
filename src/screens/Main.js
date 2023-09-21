import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { getAniList } from "../api";
import { imageState } from "../store/imageState";
import { useRecoilState } from "recoil";

function Main({ navigation }) {
  const [imageUrl, setImageUrl] = useRecoilState(imageState);
  const [linkData, setLinkData] = useState("");
  // const [image, setImage] = useRecoilState(imageState);

  const uploadImage = async () => {
    // 권한 확인 코드
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result, "이미지 경로");

    if (!result.cancelled) {
      setImageUrl(result.uri); // 이미지 경로 업데이트
    }
  };

  const linkChange = (event) => {
    setLinkData(event.target.value);
    console.log("이미지링크보내깅", event.target.value);
  };

  const submitOnpress = async () => {
    try {
      const res = await getAniList(linkData);
      if (res.status === 200) {
        console.log("게시글 조회 성공!", res);
        navigation.navigate("Info");
      }
    } catch (error) {
      console.log("게시글 조회 에러!!!!", error);
      alert("잘못된 URL입니다.");
    }
  };

  return (
    <View style={styles.mainScreenContainer}>
      <Text style={styles.inputText}>
        Drop your images, browse or import from
      </Text>
      <View style={styles.inputContainer}>
        {imageUrl && (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image} // 이미지 크기를 조절하는 스타일 추가
          />
        )}
        <TouchableOpacity onPress={uploadImage}>
          <Text style={styles.imageUrlButton}>폴더</Text>
        </TouchableOpacity>
        <TextInput
          title="url"
          style={styles.imageUrlInput}
          value={linkData}
          onChange={linkChange}
        />
      </View>
      <Button title="Submit" onPress={submitOnpress} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreenContainer: {
    flex: 1,
    backgroundColor: "#ffeaf4",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    width: 380,
    height: 200,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200, // 이미지 크기 조절
    height: 200, // 이미지 크기 조절
    marginBottom: 10,
  },
  imageUrlButton: {
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: "pink",
    textAlign: "center",
    paddingTop: 5,
    marginTop: 130,
  },
  imageUrlInput: {
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: "pink",
    textAlign: "center",
    paddingTop: 5,
  },
});

export default Main;
