import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
               <div className="left-block">
                   <img  alt="" style={style.image}/>
               </div>
               <div className="right-block">
                   <div style={{fontSize:25, fontWeight:'bold'}}>Phone</div>
                   <div style={{fontSize:25, color:'green'}}>Rs. 14,999</div>
                   <div style={{fontSize:25,color:'green'}}>Qty: 1</div>
                   <div className="cart-item-actions">

                   </div>
               </div>

            </div>
        )
    }
}

const style ={
    image:{
        height:100,
        width:100,
        borderRadius:4,
        margin:10,
        backgroundColor:'lightgrey'
    }
}

export default CartItem