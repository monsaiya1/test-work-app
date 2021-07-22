import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useLayoutEffect } from "react";
import { Button, FlatList, Image, Text, View } from "react-native";
import styled from "styled-components";

const CustomButton = styled.Button`
  background-color: white;
`;

const CustomImage = styled(Image)`
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
  align-self: center;
`;

const Home = (props) => {
  const [data, setData] = useState([]);

  const logout = useCallback(() => {
    props.navigation.push("Login");
  }, []);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setData(res.data);
    });
  }, []);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => <CustomButton onPress={logout} title="Logout" />,
    });
  }, [props.navigation]);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={(item) => (
          <View>
            <CustomImage source={{ uri: `${item.item.thumbnailUrl}` }} />
            <Text>{item.item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
