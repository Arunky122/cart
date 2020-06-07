import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:60999,
            title:'Iphone 11 Pro',
            qty:1,
            img:''
        }
    }
    render(){
        const{price,title,qty}=this.state;
        return(
            <div className="cart-item">
               <div className="left-block">
                   <img  alt="" src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg"style={style.image}/>
               </div>
               <div className="right-block">
                   <div style={{fontSize:25, fontWeight:'bold'}}>{title}</div>
                   <div style={{fontSize:20, color:'green'}}>Rs.{ price}</div>
                   <div style={{fontSize:20,color:'green'}}>Qty: {qty}</div>
                   <div className="cart-item-actions">
                       <img  className="action-icons"alt="increase" src="https://image.flaticon.com/icons/svg/1828/1828817.svg"/>
                       <img className="action-icons" alt="decrease" src="https://image.flaticon.com/icons/svg/929/929430.svg" />
                       <img  className="action-icons" alt="delete" src="https://image.flaticon.com/icons/svg/1214/1214428.svg"/>
                   </div>
               </div>

            </div>
        )
    }
}

const style ={
    image:{
        height:170,
        width:120,
        borderRadius:4,
        margin:10,
        backgroundColor:'lightgrey'
    }
}

// const actionStyle ={
//     image:{
//         height:35,
//         width:35
//     }
// }

export default CartItem