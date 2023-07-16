import React, { useState } from 'react'
import './Plan.css'
import razor from './Assets/Razorpay Icon.png'

const Plan = () => {

    const [selectedPlan, setSelectedPlan] = useState('2');
    const [totalprice, settotalprice]=useState(179)
    const [discountprice, setDiscountprice]=useState(18321)

    const handlePlanChange = (event) => {
        setSelectedPlan(event.target.value);
      };

    const handleClick = (item) =>{
        settotalprice(item.totalprice)
        const newdiscount = 18500 - item.totalprice;
        setDiscountprice(newdiscount)
    }  
    

    let planDetails =[
        { id: 1, planname: '12 Months Subscription ',totalprice:99, Monthlyprice:8, offerdetails:'Offer expired' },
        { id: 2, planname: '12 Months Subscription ',totalprice:179, Monthlyprice:15, offerdetails:'Recommended' },
        { id: 3, planname: '6 Months Subscription ',totalprice:149, Monthlyprice:25, offerdetails:'' },
        { id: 4, planname: '3 Months Subscription ',totalprice:99, Monthlyprice:33, offerdetails:'' },
    ]

  return (
    <div className='PlanOuterContainer'>
        <div className="stepContent">
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}><div className='circleBg'>1</div><div>Sign Up</div></div>  
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}><div className='circleBg2'>2</div><div>Subscribe</div></div> 
        </div>
        <div className='SubscriptionText'>
           Select your subcription plan
        </div>
        <div className="planOptions">
            { planDetails.map((item)=>(
            <>
            <div key={item.id} style={{ backgroundColor: item.offerdetails === 'Offer expired' ? '#E7E7E7' : 'white' }} className={`planClass ${selectedPlan === item.id.toString()? 'enabled' : ''}`}>
                <div className='RadioText'><div style={{ backgroundColor: item.offerdetails === 'Recommended' ? '#47BA68' : '#F77171' }} className='offervalidity'>{item.offerdetails}</div><input id="specifyColor" name="options" value={item.id} checked={selectedPlan === item.id.toString()} onChange={handlePlanChange} onClick={()=>handleClick(item)} disabled={item.offerdetails === 'Offer expired'} style={{transform: 'scale(1.5)',marginRight:'8px',color:'green' }} type="radio" />{item.planname}</div>
                <div className="plantotaltext"><span style={{fontSize:'12px'}}>Total</span> <span style={{fontSize:'16px',fontWeight:'600'}}>₹{item.totalprice}</span><br></br><span style={{fontSize:'12px',fontWeight:'400'}}>₹{item.Monthlyprice}</span><span style={{fontSize:'10px',fontWeight:'500',color:'#BEBEBE'}}>/mo</span> </div>
            </div>
            </>
            ))}
        </div>
        <div className='Subscriptionfee'>
            <div>Subscription Fee</div>
            <div>₹18,500</div>
        </div>
        <div className='OffervalidDiv'>
        <div className='Subscriptionfee2'>
            <div style={{color:'#DE4313',fontWeight:'600'}}>Limited time offer</div>
            <div>- ₹{discountprice}</div>
        </div>
        <div style={{color:'#DE4313',paddingTop:'5px',fontSize:'14px'}}>
          <span></span>Offer valid till 25th March 2023 
        </div>
        </div>
        <div className='Subscriptionfee'>
            <div style={{fontWeight:'600'}}>Total <span style={{color:'grey'}}>(Incl. of 18% GST)</span> </div>
            <div style={{fontWeight:'bolder',fontSize:'24px'}}>₹{totalprice}</div>
        </div>
        <div style={{marginTop:'28px' , display:'flex',justifyContent:'space-between'}}>
            <button className='endbuttonclass1'>CANCEL</button>
            <button className='endbuttonclass2'>PROCEED TO PAY</button>
        </div>

        <div style={{marginTop:'28px'}}>
            <img src={razor} alt="" />
        </div>
    </div>
  )
}

export default Plan