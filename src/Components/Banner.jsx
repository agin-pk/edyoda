import React from 'react'
import'./Banner.css'
import icon1 from './Assets/Icon (1).png'
import icon2 from './Assets/Icon (3).png'
import icon3 from './Assets/Icon.png'
import icon4 from './Assets/Icon (2).png'
import icon5 from './Assets/Icon (4).png'
import Plan from './Plan'


const Banner = () => {
  return (
    <div className="BannerOuterContainer">
        <div className="bannerLeftDiv">
            <div className='bannerLeftText'>Access curated courses worths <br></br><span style={{fontFamily:'Roboto, sans-serif',fontSize:'54px',textDecoration:"line-through",textDecorationColor:"red"}}>₹ 18,500</span> at just <span style={{fontFamily:'Roboto, sans-serif',fontSize:'54px',color:'#0096FF'}}>₹ 99</span> per year!</div>
            <div className='liContents'>
                <li className='liststyle'>
                    <img className='iconclass' src={icon1} alt="" />
                    <div className='listtext'><span style={{fontFamily:'Roboto, sans-serif',color:'#0096FF'}}>100+</span> Job relevant courses </div>
                </li>
                <li className='liststyle'>
                    <img className='iconclass' src={icon2} alt="" />
                    <div className='listtext'><span style={{fontFamily:'Roboto, sans-serif',color:'#0096FF'}}>20,000+</span>  Hours of content </div>
                </li>
                <li className='liststyle'>
                    <img className='iconclass' src={icon3} alt="" />
                    <div className='listtext'><span style={{fontFamily:'Roboto, sans-serif',color:'#0096FF'}}>Exclusive</span> webinar access </div>
                </li>
                <li className='liststyle'>
                    <img className='iconclass' src={icon4} alt="" />
                    <div className='listtext'>Scholarship worth<span style={{fontFamily:'Roboto, sans-serif',color:'#0096FF'}}> ₹94,500</span></div>
                </li>
                <li className='liststyle'>
                    <img className='iconclass' src={icon5} alt="" />
                    <div className='listtext'><span style={{fontFamily:'Roboto, sans-serif',color:'#0096FF'}}>Ad Free</span> learning experience </div>
                </li>
            </div>
        </div>
        <div className="bannerRightDiv">
            <Plan/>
        </div>
    </div>
  )
}

export default Banner