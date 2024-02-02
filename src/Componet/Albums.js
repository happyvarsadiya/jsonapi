import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import { Table } from "react-bootstrap";

function Albums()
{
    const [alb, setalb] = useState([]);
  
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/albums")
        .then(function (response) {
          setalb(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []); 

    return(
        <div>

        <Header></Header>

        <Table bordered variant="info">
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>

            <tbody>
            {
                alb.map((ele,ind)=>{
                    return(
                        <>
                            <tr key={ind}>
                                <td>{ele.userId}</td>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
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
export default Albums;