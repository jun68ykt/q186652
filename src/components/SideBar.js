import React from 'react'

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false }
  }

  getValue = (event) => {
    // console.log("Get value", event.target.value);

    // Trigers updateItem() on App Component
    this.props.onClick(event.target.value);
  }

  toggleChecked = () => {
    if(this.state.checked===false) {
      this.setState({ checked: !this.state.checked });
      console.log("toggleChecked", this.state.checked);
    }
  }

  render() {
    return (
      <div>

        <ul className="category_list">
          <li>
            <input
              type="radio"
              value="shirt"
              checked={this.toggleChecked}
              onChange={(e) => this.getValue(e)}
            />Shirts
          </li>
          <li>
            <input
              type="radio"
              value="jacket"
              checked={this.toggleChecked}
              onChange={(e) => this.getValue(e)}
            />Jackets
          </li>
          <li>
            <input
              type="radio"
              value="skirt"
              checked={this.toggleChecked}
              onChange={(e) => this.getValue(e)}
            />Skirts
          </li>
          <li>
            <input
              type="radio"
              value="pants"
              checked={this.toggleChecked}
              onChange={(e) => this.getValue(e)}
            />Pants
          </li>
        </ul>

        <ul>
          <li>
            <input
              type="radio"
              value="S"
              checked={this.toggleChecked}
              onChange={(e) => this.getValue(e)}
            />S
          </li>
          <li>
            <input
              type="radio"
              value="M"
              checked={this.toggleChecked}
              onChange={(e) => this.getValue(e)}
            />M
          </li>
          <li>
            <input
              type="radio"
              value="L"
              checked={this.toggleChecked}
              onChange={(e) => this.getValue(e)}
            />L
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
