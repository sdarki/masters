import React, { useEffect, useState } from 'react';
import { Card, Modal, Tabs } from 'antd';
const {Meta} = Card
const { TabPane } = Tabs;
import {products} from './products'
import style from './sparse.module.css'
import Popup from './Popup';
import ExtraPopup from './ExtraPopup.js';
import PopUpTwo from './PopUpTwo.js';

function SparesComponent() { 
  // console.log("here",products)
  
  const [selected, setSelected] = useState(null)

  const [width, setWidth] = useState(0)
  useEffect(() => {
    function handleResize() {
      setWidth(parseInt(window.innerWidth))
    }
    window.addEventListener("resize", handleResize)
    
    handleResize()
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth])
  // console.log(selected)

  const handleDeityClick = (type, index) => {
    setSelected({type:type,index:index});
    // document.body.style.overflow = 'hidden'; 
  };

  const handleClose = () => {
    setSelected(null);
      document.body.style.overflow = 'auto'; 
  };

  return (
    <>
   <div className='page-wrapper'>
   <div className='spare-pro'>
   
        <Tabs defaultActiveKey='0' tabPosition={width<900?'top':'left'} style={{fontSize:"10px"}}>
          <TabPane tab={'BALUSTER'} key={0}>
            <div className='row ml-0'>
              {products.baluster.map((v,index)=>
                <div className='col-md-4' onClick={()=> handleDeityClick('baluster',index)} key={index}>
                  <Card hoverable cover={<img alt={v.title} src={v.thumImg} />}>
                    <Meta title={v.title}  />
                  </Card>
                </div>
              )}
            </div>
         </TabPane>


          <TabPane tab={'PRECAST CONCRETE'} key={1}>
            <div className='row ml-0'>
              {products.precast_concrete.map((v,index)=>
                <div className='col-md-4' onClick={()=> handleDeityClick('precast_concrete',index)} key={index}>
                  <Card hoverable cover={<img alt={v.title} src={v.thumImg} />}>
                      <Meta title={v.title}  />
                  </Card>
                </div>
              )}
              </div>
          </TabPane>

          <TabPane tab={'INTERLOCKING BRICK'} key={2}>
            <div className='row ml-0'>
              {products.interlocking_brick.map((item,index)=>
                <div className='col-md-4' onClick={()=> handleDeityClick('interlocking_brick',index)} key={index}>
                  <Card hoverable cover={<img alt={item.title} src={item.thumImg} />}>
                      <Meta title={item.title}  />
                  </Card>
                </div>
              )}
              </div>
          </TabPane>

          <TabPane tab={'KERB STONE'} key={3}>

            <div className='row ml-0'>
              {products.kerb_stone.map((item,index)=>
                <div className='col-md-4' onClick={()=> handleDeityClick('kerb_stone',index)} key={index}>
                  <Card hoverable cover={<img alt={item.title} src={item.thumImg} />}>
                      <Meta title={item.title}  />
                  </Card>
                </div>
              )}
              </div>
            </TabPane>
            <TabPane tab={'KERBSTONE RUBBER MOULD'} key={4}>
              <div className='row ml-0'>
                {products.interlocking_brick.map((item,index)=>
                  <div className='col-md-4' onClick={()=> handleDeityClick('kerbstone_rubber_mould',index)} key={index}>
                    <Card hoverable cover={<img alt={item.title} src={item.thumImg} />}>
                        <Meta title={item.title}  />
                    </Card>
                  </div>
                )}
                </div>
              </TabPane>
              <TabPane tab={'PAVER BLOCK'} key={5}>
              <div className='row ml-0'>
                {products.paver_block.map((item,index)=>
                  <div className='col-md-4' onClick={()=> handleDeityClick('paver_block',index)} key={index}>
                    <Card hoverable cover={<img alt={item.title} src={item.thumImg} />}>
                        <Meta title={item.title}  />
                    </Card>
                  </div>
                )}
                </div>
              </TabPane>

        </Tabs>
        {selected !== null && (
            <div className={`${style.overlay}`} onClick={handleClose}>
              {(() => {
                switch (selected.type) {
                  case 'baluster':
                    return (
                      <Popup 
                        selected={products.baluster[selected.index]} 
                        handleClose={handleClose}
                      />
                    );
                  case 'precast_concrete':
                    return (
                      <Popup 
                        selected={products.precast_concrete[selected.index]} 
                        handleClose={handleClose}
                      />
                    );
                  case 'interlocking_brick':
                    return (
                      <ExtraPopup 
                        selected={products.interlocking_brick[selected.index]} 
                        handleClose={handleClose}
                      />
                    );
                  case 'kerb_stone':
                    return (
                      <ExtraPopup 
                        selected={products.kerb_stone[selected.index]} 
                        handleClose={handleClose}
                      />
                    );
                  case 'kerbstone_rubber_mould':
                    return (
                      <Popup 
                        selected={products.kerbstone_rubber_mould[selected.index]} 
                        handleClose={handleClose}
                      />
                    );
                  case 'paver_block':
                    return (
                      <PopUpTwo 
                        selected={products.paver_block[selected.index]} 
                        handleClose={handleClose}
                      />
                    );
                  default:
                    return null;
                }
              })()}
            </div>
          )}

       
        {/* {
          selected !== null && 
          <div className={`${style.overlay}`} onClick={handleClose}>
              {
                selected.type=={'interlocking_brick','kerb_stone'} ?
                  <ExtraPopup selected={products[selected.type][selected.index]} handleClose={handleClose}/>
                :
                  <Popup selected={products[selected.type][selected.index]} handleClose={handleClose}/>
              //  :
              //     <PopUpTwo selected={products[selected.type][selected.index]} handleClose={handleClose}/>
              }
          
          </div>
        } */}
      </div>
    
    </div>
   
    
    </>
  )
}

export default SparesComponent
