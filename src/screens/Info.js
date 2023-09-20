import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { styled } from "styled-components/native";
import { getTest } from "../api/Index";

function Info() {
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getTest();
        if (res.status === 200) {
          const res = await getTest();
          console.log("게시글 조회 성공", res);
          console.log(res);
        }
      } catch (error) {
        console.log("게시글조회에러", error);
        alert("잘못된 url이거나 암튼그렇다. 임마");
      }
    };
    getData();
  }, []);
  return (
    <ViewContainer>
      <TextContainer>애니정보</TextContainer>
    </ViewContainer>
  );
}

const TextContainer = styled.Text`
  font-size: 50px;
`;

const ViewContainer = styled.View``;
export default Info;
