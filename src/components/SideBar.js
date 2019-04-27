import React from 'react'

const FILTER_VALUES = [
  { name: 'category', values: ['shirt', 'jacket', 'skirt', 'pants'] },
  { name: 'size', values: ['S', 'M', 'L'] }
];

const SideBar = ({ filter, onChange, onClear }) => (
  <div>
    {
      FILTER_VALUES.map(({name, values}) =>
        <ul
          className={`${name}_list`}
          key={name}
        >
          {
            values.map(v =>
              <li key={v}>
                <input
                  name={name}
                  type="radio"
                  value={v}
                  checked={filter[name] === v}
                  onChange={onChange}
                />
                <span className='capitalize'>{v}</span>
              </li>
            )
          }
        </ul>
      )
    }
    <button onClick={onClear}>フィルタをクリア</button>
  </div>
);

export default SideBar;
