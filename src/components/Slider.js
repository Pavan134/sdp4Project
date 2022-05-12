import React,{useState,useEffect} from 'react'
import "./styles/Slider.css"
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
function Slider() {
    const [count, setcount] = useState(0)
    const [image, setimage] = useState(image1)
    const images=[image1,image2,image3]
    const add=()=>{
        if(count===2){
            setcount(0)
            setimage(image1)
        }
        else{
            setcount(prevCount=>prevCount+1)
            if(count===1)
            setimage(image2)
            else
            setimage(image3)
        }
        console.log(count);
    }
    const sub=()=>{
        if(count===0){
            setcount(2)
            setimage(image3);
        }
        else{
            console.log(count)
            setcount(prevCount=>prevCount-1);
            if(count===1)
            setimage(image2)
            else
            setimage(image1)
        }
        console.log(count);
    }
    useEffect(()=>{
        const interval=setInterval(add,5000)
        return()=>{
            clearInterval(interval)
        }
    },[count])
  return (
    <div className='imcontainer'>
        <img src={image} alt="Snow" />
        <button className='btn1' onClick={sub}>{"<"}</button>
        <button className='btn2' onClick={add}>{">"}</button>
        
    </div>
  )
}

export default Slider