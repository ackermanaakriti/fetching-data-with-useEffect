import React,{useEffect, useState} from 'react'
import axios from 'axios'
function FetchData() {
    const [Show, ShowData] = useState([])
    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res=>{
            console.log(res);
            ShowData(res.data);

        })
        .catch(err=>
            {
                console.log(err);
            })
        
    })
  return <>
  {
 Show.map(post=>(
<li key={post.id}>{post.name}</li>
 )
     

 )
  }

  </>
    

}

export default FetchData