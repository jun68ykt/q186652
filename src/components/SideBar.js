import React from 'react'

class SideBar extends React.Component {
  render() {
    const { filter, onChange, onClear } = this.props;

    return (
      <div>

        <ul className="category_list">
          <li>
            <input
              name="category"
              type="radio"
              value="shirt"
              checked={filter.category === 'shirt'}
              onChange={onChange}
            />Shirts
          </li>
          <li>
            <input
              name="category"
              type="radio"
              value="jacket"
              checked={filter.category === 'jacket'}
              onChange={onChange}
            />Jackets
          </li>
          <li>
            <input
              name="category"
              type="radio"
              value="skirt"
              checked={filter.category === 'skirt'}
              onChange={onChange}
            />Skirts
          </li>
          <li>
            <input
              name="category"
              type="radio"
              value="pants"
              checked={filter.category === 'pants'}
              onChange={onChange}
            />Pants
          </li>
        </ul>

        <ul className="size_list">
          <li>
            <input
              name="size"
              type="radio"
              value="S"
              checked={filter.size === 'S'}
              onChange={onChange}
            />S
          </li>
          <li>
            <input
              name="size"
              type="radio"
              value="M"
              checked={filter.size === 'M'}
              onChange={onChange}
            />M
          </li>
          <li>
            <input
              name="size"
              type="radio"
              value="L"
              checked={filter.size === 'L'}
              onChange={onChange}
            />L
          </li>
        </ul>
        <button onClick={onClear}>フィルタをクリア</button>
      </div>
    );
  }
}

export default SideBar;
