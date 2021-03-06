import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { yellow } from 'ansi-colors';
import GetPage from "../NetworkingApp/src/GetPage";
import PutPage from "../NetworkingApp/src/PutPage";
import PostPage from "../NetworkingApp/src/PostPage";
import DeletePage from "../NetworkingApp/src/DeletePage";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pageWillBeRendered: "main"
    }
  }

  openOtherPage = page => {
    if (page && page !== "") {
      this.setState({ pageWillBeRendered: page })
    }
  }

  render() {
    const { pageWillBeRendered } = this.state

    if (pageWillBeRendered === "get") {
      return <GetPage backToMainPage={this.openOtherPage} />
    } else if (pageWillBeRendered === "post") {
      return <PostPage backToMainPage={this.openOtherPage}  />
    } else if (pageWillBeRendered === "put") {
      return <PutPage backToMainPage={this.openOtherPage}  />
    } else if (pageWillBeRendered === "delete") {
      return <DeletePage backToMainPage={this.openOtherPage}  />
    }

    return (
      <View>
        <Text>Networking App</Text>

        <TouchableOpacity onPress={() => this.openOtherPage("get")}>
          <Text style={Styles.txtButton}>Open Get Page</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.openOtherPage("post")}>
          <Text style={Styles.txtButton}>Open Post Page</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.openOtherPage("put")}>
          <Text style={Styles.txtButton}>Open Put Page</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.openOtherPage("delete")}>
          <Text style={Styles.txtButton}>Open Delete Page</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  txtButton: { margin: 10, backgroundColor: "yellow" }
})

export default App