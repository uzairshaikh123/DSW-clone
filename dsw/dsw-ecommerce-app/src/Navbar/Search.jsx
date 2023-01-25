import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import {Link as RLink} from 'react-router-dom'

const renderTitle = (title: string) => (
  <span>
    {title}
    <a
      style={{ float: 'right' }}
    //   href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
        <RLink to="/products">
        more
        </RLink>
    
    </a>
  </span>
);

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});

const options = [
  {
    label: renderTitle('Shoes'),
    options: [renderItem('Shoes for men', 30), renderItem('Shoes for men', 30)],
  },
  {
    label: renderTitle('Sneakers'),
    options: [renderItem('Sneakers for men', 6), renderItem('Sneakers for men',6)],
  },
  {
    label: renderTitle('Atheletic Shoes'),
    options: [renderItem('Athletic Shoes for men', 10)],
  },
];

const Appfun: React.FC = () => (
   
    
  
     <AutoComplete
    popupClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    style={{ width: 250 }}
   options={options}
  >
  <Input.Search size="large" placeholder="search styles,brands and more" />
  </AutoComplete>

);

export default Appfun