import { Dropdown, Space,Popover  } from 'antd'
import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import VisionComponent from '../about-us/VisionComponent';

const TopExtraNavComponent = ({ isFixed }) => {
    const router = useRouter()
    function handleClick() {
        router.push(`/about-us`)
    }
    const dirContent = (
        <div className='dirCont'>
          <p> is the Chairman and Director of Apurva Engineering,
overseeing the strategic direction and operations of the company. With a wealth
of experience spanning over two decades in the marine and industrial sectors,
Mrs. Raicar brings invaluable leadership and expertise to her role</p>
<a class="read-more" onClick={handleClick}>Read More<i class="fa fa-arrow-right"></i></a>
        </div>
      )
    return (
        <div className='main_top_nav' style={{ display: isFixed !== null ? 'none' : 'block',backgroundColor:'#0dcaf0' }}>
            <div className='container clearfix'>
                <div className='top-extra-nav'>
                    <div className='container'>
                        <div className='row d-flex justify-content-between align-items-center'>
                        <div className='klab-topbar-left'>
                        <ul>
                        <li>
                                <a href="#" style={{marginLeft:'6px'}}>
                                    <div className='icon-box'>
                                        <i class="fa fa-money" aria-hidden="true"></i>
                                    </div>

                                    <h6>GST - 30CBAPR9562D1ZS
</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{marginLeft:'6px'}}>
                                    <div className='icon-box'>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </div>

                                    <h6>masterashok65@gmail.com
</h6>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className='icon-box'>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>

                                    <h6>+91-9421304620</h6>
                                </a>
                                
                                
                            </li>
                            <li>
                                <a href="#">
                                    <div className='icon-box'>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>

                                    <h6>+91-9421304620</h6>
                                </a>
                                </li>
                          
                        </ul>
                        </div>
                            <div className='klab-topbar-right header-nav'>
                            
                                <ul>
                                    <li><a style={{color:'white'}}> <i class=""></i></a>
                                  
                                    <ul className="sub-menu">
                                    {/* <li><a>MICR Electronics Ltd( ONIDA )</a></li>
                                    <li><a>Ion Exchange India Ltd</a></li>
                                    <li><a>WHIRLPOOL of India Ltd</a></li>
                                    <li><a>IFB Industries Ltd Washing Machines & AC </a></li>
                                    <li><a>Commscope India Pvt. Ltd </a></li>
                                    <li><a>Hyundai Construction Equipment Pvt. Ltd</a></li> */}
                                    {/* <li><a>SHAHI SHIPPING</a></li>
                                    <li><a>DEMPO SHIPBUILDING LTD </a></li>
                                    <li><a>MANDOVI DRY DOCKS</a></li>
                                    <li><a>LAVGAN SHIPYARD </a></li>
                                    <li><a>S. A. OXY NITRO(VERNA)</a></li>
                                                <li><a>KUNDIL ALLOY(KUNDAIM) </a></li>
                                    <li><a>DILIP BUILDCON</a></li>
                                    <li><a>GOA SHIPYARD LTD  </a></li>
                                    <li><a>THE SHIPPING CORPORATION OF INDIA </a></li>
                                    <li><a>VIJAY MARINE SERVICES </a></li>
                                    <li><a>BAPU SHIPPING PVT.LTD </a></li>
                                    <li><a>PNP MARITIME SERVICES PVT.LTD</a></li>
                                    <li><a>ARCADIA SHIPPING & TRADING CO. </a></li>
                                    <li><a>AK SHIPPING </a></li>
                                    <li><a>SHREEJI SHIPPING</a></li> */}
                                    </ul>
                                    
                                    </li>
                                    
                                    <li>
                                    {/* <Popover className='dirPop' content={dirContent} title="Mrs. Poonam Raicar">
                                        <a >Director Profile</a>
                                    </Popover> */}
                                        
                                    </li>
                                    <li>
                            <a href="#">
                                    
                                    <i className="fa fa-solid fa-user"></i>
                                    
                                    <h6>Login</h6>
                                </a>
                               
                                
                            </li>
                            <li>
                            <a href="#">
                                    <h6>Register</h6>
                                </a>
                               
                                
                            </li>
                            
                                </ul>
                            </div>
                        </div>
                        
                        
                    </div>

                </div>


            </div>
        </div>


    )
}

export default TopExtraNavComponent