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

  updateItem = (filter) => {
    this.setState({products: fashion});
    let filteredItem = this.state.products.slice();


    let products = filteredItem.filter(item => {
      if (item.category === filter || item.size === filter) {
        return true;
      }

    });
    this.setState({products: products});
    console.log(products);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <SideBar
            filter={this.state.filter}
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
