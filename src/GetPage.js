import React, { Component } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from "axios";

class GetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      height: "",
      hair_color: "",
      gender: "",
      isLoading: false
    };
  }

  getStartWarsData = () => {
    this.setState({ isLoading: true });
    const url = "https://swapi.co/api/people/1/";
    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.setState({
          name: res.data.name,
          height: res.data.height,
          gender: res.data.gender,
          hair_color: res.data.hair_color,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { name,height,gender,hair_color, isLoading } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {isLoading && <ActivityIndicator Size="large" />}

        <Text>Get Page</Text>
        <Text>name : {name}</Text>
        <Text>height : {height}</Text>
        <Text>hair_color : {hair_color}</Text>
        <Text>gender : {gender}</Text>
        <TouchableOpacity onPress={() => this.getStartWarsData()}>
          <Text style={{ margin: 10, backgroundColor: "red" }}>
            get Star wars
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.backToMainPage("main")}>
          <Text style={{ margin: 10, backgroundColor: "red" }}>
            Back to Main Page
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GetPage;
