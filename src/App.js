import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/layout/TopNav';
import BottomNav from './components/layout/BottomNav';
import SearchBar from './components/search/SearchBar';
import CardInGroup from './components/card/CardInGroup';



class App extends Component {
  //thi is the initial state 
  state = {
    names: [],
    loading: 'false',
  }

  // then it when the component mounts the state should change
  // axios deals with promises so handle with async await
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_CLIENT_ID}`)
    this.setState({ names: res.data, loading: false });
    console.log(res.data)
  }


  searchUsers = async (text) => {
    const res = await axios.get(`https://api.unsplash.com/search/photos?query=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}`);
    this.setState({ names: res.data.results, loading: false });
    console.log(res.data.results)
  }


  render() {
    return (
      <div>
        <TopNav />
        <div className="container">

          <SearchBar searchUsers={this.searchUsers} />
          <br></br>
          <CardInGroup loading={this.state.loading} names={this.state.names} />
        </div>
        <BottomNav />
      </div>
    );
  }
}

export default App;

