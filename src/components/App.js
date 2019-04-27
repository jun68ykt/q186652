import React from 'react'
import SideBar from './SideBar';
import Item from './Item';
import fashion from '../data/fashion.json';
import './App.css';

class App extends React.Component {

  state = {
    filter: {
      category: "",
      size: "",
    },
    products: fashion
  }

  filterChange = (e) => {
    this.setState({
      filter: {
        ...this.state.filter,
        [e.target.name]: e.target.value,
      }
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <SideBar
            filter={this.state.filter}
            onChange={this.filterChange}
          />
        </div>

        <main>
          <Item
            items={this.state.products}
          />
        </main>
      </div>
    );
  }
}

export default App;
