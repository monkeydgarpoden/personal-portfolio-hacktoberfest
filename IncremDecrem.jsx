import React, { useState } from 'react';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const IncremDecrem=()=>{

    const [num,setNum]=useState(0);

    const incNum=()=>{
        setNum(num+1)
    }
    const decNum=()=>{
        if(num>0){
        setNum(num-1)
        }else{
            alert("sorry we cannot go donw")
            setNum(0)
        }
    }
    return  (
        <>
        <div className="main_div">
        <div className="center_div">
        <h1>{num}</h1>
        <div className="btn_div">
        <Tooltip title="Add">
        <Button onClick={incNum} className="btn_green" >Increm</Button>
        </Tooltip>
        <Tooltip title="Delete">
        <Button onClick={decNum} className="btn_red"   >Decrem  </Button>
        </Tooltip>
      
        </div>
        </div>
        </div>

        </>
    )
}
export default IncremDecrem;