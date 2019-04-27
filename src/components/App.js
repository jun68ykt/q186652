import React from 'react'
import SideBar from './SideBar';
import Item from './Item';
import fashion from '../data/fashion.json';
import './App.css';

class App extends React.Component {

  state = {
    category: "",
    size: "",
  }

  filterChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <SideBar
            filter={this.state}
            onChange={this.filterChange}
          />
        </div>

        <main>
          <Item
            items={fashion}
            filter={this.state}
          />
        </main>
      </div>
    );
  }
}

export default App;
