import React,{useState}from 'react'

function AddProduct() {
    const [name, setname] = useState("")
    const [use, setuse] = useState("")
    const [price, setprice] = useState("")
    const [imageUrl, setimageUrl] = useState()
    var url='';
    const submit=async(image)=>{
        var myHeaders = new Headers();
        var formdata = new FormData();
        formdata.append("file", image);
        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          };
          fetch("http://127.0.0.1:8000/api/uploads3", requestOptions)
      .then(response => response.json())
      .then(result => {
        url=result.s3_url;
        console.log(url);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({"name":name,"use":use,"price":price,"imageUrl":result.s3_url});
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
    
        fetch(`http://127.0.0.1:8000/api/addproduct`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
          })
          .catch(error => console.log('error', error));
  
      })

      .catch(error => console.log('error', error));
      
     
   
    }
    
  return (
    <div>
        <p></p>Product Name:<input type="text" value={name} onChange={e=>setname(e.target.value)}></input><br></br>
        Product use:<input type="text" value={use} onChange={e=>setuse(e.target.value)}></input><br></br>
        Product price:<input type="text" value={price} onChange={e=>setprice(e.target.value)}></input><br></br>
        Product image:<input type="file"  name="file" onChange={e=>setimageUrl(e.target.files[0])} ></input><br></br>
        Product pdf:<input type="file" name="pdf"  ></input><br></br>
        <button onClick={()=>submit(imageUrl)}>submit</button>
    </div>
  )
}

export default AddProduct