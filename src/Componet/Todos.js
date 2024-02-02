import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import { Table } from "react-bootstrap";

function Todos() {

    const [todo, settodo] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(function (response) {
                settodo(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Header></Header>

            <Table bordered variant="secondary">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        todo.map((ele, ind) => {
                            return (
                                <>
                                    <tr key={ind}>
                                        <td>{ele.userId}</td>
                                        <td>{ele.id}</td>
                                        <td>{ele.title}</td>
                                        <td>{ele.completed ? 'true' : 'false'}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
export default Todos;