import React from 'react'
import { Header } from './Header'
import HomeComponents from './HomeComponents'
import Slider from './Slider'
function Home() {
  return (
    <div>
        <Header/>
      <Slider/>
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

export default Home