import React from 'react'
import {withRouter} from 'next/router'
import MenuItemComponent from './MenuItemComponent';
import TopExtraNavComponent from './TopExtraNavComponent';
import DrawerComponent from '../drawer/DrawerComponent';
import MenuComponent from './MenuComponent';
import { Button, Space } from 'antd';
import { useRouter } from 'next/router';


const MainNavBarComponent =()=>{
    const[open,setOpen]=React.useState(false)
    const[btnClick,setBtnClick]=React.useState(false)
    const[isFixed,setIsFixed]=React.useState(null)
    const router= useRouter()
    
   const showDrawer = () => {
        setOpen(true)
        
      };
    const onClose = () => {
        setOpen(false)
      };
      React.useEffect(()=>{
        const handleScroll = () => {
            var scroll = window.pageYOffset
    
            //console.log('scrollValue',window.scrollTop())
            if (scroll > 100) {
               // console.log('scorll=', false)
               setIsFixed('is-fixed')
                
            } else {
                setIsFixed(null)
                //console.log('scorll=', true)
                
            }
    
        }
        window.addEventListener("scroll", handleScroll);
        return()=>{
          window.removeEventListener('scroll', handleScroll);
        }
      },[])  
    
    
    
  return (
    <>
    <header className="site-header mo-left header">
		<div className={`sticky-header main-bar-wraper navbar-expand-lg ${isFixed}`}>
            <div className="main-bar clearfix">
                
                    {/*<!-- website logo -->*/}
                    <TopExtraNavComponent isFixed={isFixed}/>
                    <div className='container logo_middle clearfix' style={{display:isFixed!==null?'none':'block', height:"100px"}}>
                        <div className="logo-header mostion logo-dark">
                            
                            <a onClick={() => router.push('/')}>
                                <img src='/images/logo/aplogo.png' alt="logo" /> 
    
                                </a>
                                
                        </div>
                        {/*<!-- nav toggle button -->*/}
                        <button onClick={()=> setBtnClick(!btnClick)} 
                                className={btnClick?"navbar-toggler open navicon justify-content-end":"navbar-toggler collapsed navicon justify-content-end"} 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarNavDropdown" 
                                aria-controls="navbarNavDropdown" 
                                aria-expanded={btnClick?"true":"false"} 
                                aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    
                    {/*<!-- extra nav -->*/}
                    
                     
                    <DrawerComponent open={open} setOpen={setOpen} onHide={onClose}/>
                    
                    {/*<!-- Quik search -->*/}
                    {/*<div className="dlab-quik-search ">
                        <form action="#">
                            <input name="search" value="" type="text" className="form-control" placeholder="Type to search">
                            <span id="quik-search-remove"><i className="ti-close"></i></span>
                        </form>
                    </div>*/}
                    {/*<!-- main nav -->*/}
                    <div className='nav_box'>
                    <div className='container clearfix'>
                    <div className="extra-nav">
                        
                        <Space style={{display:btnClick?'none':'flex'}}>
                            <Button onClick={()=>setOpen(true)} size='middle'  icon={<i class="las la-border-none"></i>} className='btn_drawer'/>
                            <Button onClick={() => router.push('/contact-us')} size='middle' icon={<i class="las la-comment"></i>} className='btn_primary2'>Request a Quote</Button>
                        </Space>
                        
                        
                    </div>
                        <div className={btnClick?`header-nav navbar-collapse show collapse`:`header-nav navbar-collapse collapse  `} id="navbarNavDropdown">
                            <div className="logo-header d-md-block d-lg-none">
                                <a href="#">
                                <img src='/images/logo/aplogo.png' alt="logo"/> 
                                    </a>
                            </div>
                            
                            <MenuItemComponent/>
                           
                            <div className="kam-social-icon">
                                <ul>
                                    <li><a className="site-button circle fa fa-facebook" ></a></li>
                                    <li><a className="site-button  circle fa fa-twitter" ></a></li>
                                    <li><a className="site-button circle fa fa-linkedin" ></a></li>
                                    <li><a className="site-button circle fa fa-instagram" ></a></li>
                                </ul>
                            </div>	
                            
                        </div>
                        
                    </div>
                    </div>

                    
                    
                    
               
            </div>
            <MenuComponent />
        </div>
        
    </header>
    </>
  )
   
}

export default withRouter (MainNavBarComponent)