import React from 'react'

const Item = (props) => {
  const { items } = props;

  const renderedList = items
    .map(item => {
      return (
        <li key={item.id}>
          <div className="image_container"><img src={item.image} alt={item.name} /></div>
          <p className="product_name">{item.name}</p>
          <p className="price">{item.price}</p>
          <p>Size: {item.size}</p>
          <p>Category: {item.category}</p>
        </li>
      )
  });

  return <ul className="products">{renderedList}</ul>
};

export default Item;
