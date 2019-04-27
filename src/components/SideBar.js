import React from 'react'

class SideBar extends React.Component {
  render() {
    const { filter } = this.props;

    return (
      <div>

        <ul className="category_list">
          <li>
            <input
              type="radio"
              value="shirt"
              checked={filter.category === 'shirt'}
            />Shirts
          </li>
          <li>
            <input
              type="radio"
              value="jacket"
              checked={filter.category === 'jacket'}
            />Jackets
          </li>
          <li>
            <input
              type="radio"
              value="skirt"
              checked={filter.category === 'skirt'}
            />Skirts
          </li>
          <li>
            <input
              type="radio"
              value="pants"
              checked={filter.category === 'pants'}
            />Pants
          </li>
        </ul>

        <ul>
          <li>
            <input
              type="radio"
              value="S"
              checked={filter.size === 'S'}
            />S
          </li>
          <li>
            <input
              type="radio"
              value="M"
              checked={filter.size === 'M'}
            />M
          </li>
          <li>
            <input
              type="radio"
              value="L"
              checked={filter.size === 'L'}
            />L
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
