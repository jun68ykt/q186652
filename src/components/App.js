import React from 'react'
import SideBar from './SideBar';
import Item from './Item';
import FASHION_DATA from '../data/fashion.json';
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

  filterClear = () => {
    this.setState({
      category: "",
      size: "",
    })
  }

  render() {
    const { category, size } = this.state;
    const items = FASHION_DATA.filter(item =>
      [item.category, ""].includes(category) &&
      [item.size, ""].includes(size)
    );

    return (
      <div className="wrapper">
        <div className="sidebar">
          <SideBar
            filter={this.state}
            onChange={this.filterChange}
            onClear={this.filterClear}
          />
        </div>

        <main>
          <Item items={items} />
        </main>
      </div>
    );
  }
}

export default App;
