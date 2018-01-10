import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyD67xaxJL9dj-k-oJpr5hxgx1h27X57wXY';

const App = () => {
  return (<div>
    <SearchBar />
  </div>)
}

ReactDOM.render(<App />, document.querySelector('.container'));
