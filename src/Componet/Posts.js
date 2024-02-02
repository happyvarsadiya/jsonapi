import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import { Table } from "react-bootstrap";


function Posts()
{
    const [home1, sethome1] = useState([]);
  
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          sethome1(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []); 

    return(
        <div>

        <Header></Header>

        <Table bordered variant="primary">
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
            {
                home1.map((ele,ind)=>{
                    return(
                        <>
                            <tr key={ind}>
                                <td>{ele.userId}</td>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                <td>{ele.body}</td>
                            </tr>                                
                        </>
                    )
                })
            }    
            </tbody> 
        </Table>              
        </div>
    )
}
export default Posts;