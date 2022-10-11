import React from 'react';
const Sresult=(props)=>{
      const img=`https://source.unsplash.com/600x400?${props.name} `;
      return(
            <>
            <div>
            <img src={img} alt='search'></img>
            </div>
            </>
      )
      
}
export default Sresult;