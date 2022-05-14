import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Slider from './Slider'
import HomeComponents from './HomeComponents'
function UserHome() {
    const id=localStorage.getItem("id")
    const [user, setUser] = useState({})
    const className='button1'
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/getuser/${id}`).
    then(
        response=>{

            setUser(response.data)
        })
        .catch(error=>{
            setUser({})
            className='display'
        })
    },[])
    const logout=()=>{

      window.location.href ="http://localhost:3000/login"
    }
    const addproduct=()=>{
      window.href.access="http://localhost:3000/addproduct"
    }
  return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className='head'>
      <div className='title'>Smart App</div>
      <a href="/products" className='a1'>products</a>
      <button style={{margin:"15px"}}>{user.username}</button>
      <button style={{margin:"15px"}} onClick={logout}>logout</button>
      

      
    </div>
    <Slider></Slider>
    <div>
        <h1>Smart Farming</h1>
        <p>
      "Smart farming" is an emerging concept that refers to managing farms using technologies like IoT, robotics, drones and AI to increase the quantity and quality of products while optimizing the human labor required by production.
      The Internet of Things (IoT) has provided ways to improve nearly every industry imaginable. In agriculture, IoT has not only provided solutions to often time-consuming and tedious tasks but is totally changing the way we think about agriculture. What exactly is a smart farm, though? Here is a rundown of what smart farming is and how it’s changing agriculture.
      </p>
      <h1>Automation in Smart Greenhouses
      </h1>
      <p>
      Traditional greenhouses control the environmental parameters through manual intervention or a proportional control mechanism, which often results in production loss, energy loss, and increased labor cost.

IoT-driven smart greenhouses can intelligently monitor as well as control the climate, eliminating the need for manual intervention. Various sensors are deployed to measure the environmental parameters according to the specific requirements of the crop. That data is stored in a cloud-based platform for further processing and control with minimal manual intervention.
      <HomeComponents/>
      </p>
      </div>
    </div>
  )
}

export default UserHome