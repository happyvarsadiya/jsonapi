import { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import { Table } from "react-bootstrap";

function User() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                setUsers(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Header></Header>

            <Table bordered variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>WebSite</th>
                        <th>Company</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((ele, ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>

                                    <td>
                                        <Table bordered>
                                            <tr>
                                                <th>street:</th>{ele.address.street}
                                            </tr>
                                            <tr>
                                                <th>suite:</th>{ele.address.suite}
                                            </tr>
                                            <tr>
                                                <th>city:</th>{ele.address.city}
                                            </tr>
                                            <tr>
                                                <th>zipCode:</th>{ele.address.zipcode}
                                            </tr>
                                            <ul>
                                                <h5>---Geo---</h5>
                                                <li>{ele.address.geo.lat}</li>
                                                <li>{ele.address.geo.lng}</li>
                                            </ul>
                                        </Table>
                                    </td>

                                 

                                    <td>{ele.phone}</td>
                                    <td>{ele.website}</td>

                                    <td>
                                        <Table bordered>
                                            <tr>
                                                <th>name:</th>{ele.company.name}
                                            </tr>
                                            <tr>
                                                <th>CatchPhrase:</th>{ele.company.catchPhrase}
                                            </tr>
                                            <tr>
                                                <th>Bs:</th>{ele.company.bs}
                                            </tr>
                                        </Table>
                                    </td>

                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default User;
