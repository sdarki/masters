import React, { useEffect, useState } from 'react';
import { Card, Tabs } from 'antd';
import { useRouter } from 'next/router';
const { Meta } = Card;
const { TabPane } = Tabs;
import { products } from './products';
import style from './sparse.module.css';

function SparesComponent() {
  const [width, setWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleCardClick = (title) => {
    router.push(`/spares/${title}`);
  };

  return (
    <div className='page-wrapper'>
      <div className='spare-pro'>
        <Tabs defaultActiveKey='0' tabPosition={width < 900 ? 'top' : 'left'} style={{ fontSize: "10px" }}>
          {Object.keys(products).map((category, categoryIndex) => (
            <TabPane tab={category.toUpperCase().replace('_', ' ')} key={categoryIndex}>
              <div className='row ml-0'>
                {products[category].map((item, index) => (
                  <div className='col-md-4' onClick={() => handleCardClick(item.title)} key={index}>
                    <Card style={{ width: "315px" }} hoverable cover={<img style={{ padding: "10px", borderRadius: "25px" }} alt={item.title} src={item.thumImg} />}>
                      <Meta title={item.title} />
                    </Card>
                  </div>
                ))}
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default SparesComponent;
