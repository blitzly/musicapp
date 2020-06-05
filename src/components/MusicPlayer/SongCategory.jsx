import React from 'react';

function SongCategory(props) {
  let i = 0;
  const categories = props.categories.map((category) => {
    i = i + 1;
    return (
      <div
        className='cell'
        key={category.id}
        onClick={() => props.clicked(category.id, category.name)}
        style={{ backgroundImage: category.image }}
      >
        {/* {category.name} */}
        <img
          src={category.image}
          alt=''
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    );
  });
  return <div className='grid'>{categories}</div>;
}

export default SongCategory;
