import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
function Test() {
    const [list, setlist] = useState([])
    const name='pavan'
    list.push({name:'pavan'})
    console.log(list)
  return (
    <div>
        test
    </div>
  )
}

export default Test