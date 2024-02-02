import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import { Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Photos() {

    const [photo, setphoto] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(function (response) {
                setphoto(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div>

            <Header></Header>
                    <div className="alldiv">
                    {
                        photo.map((ele, ind) => {
                            return (
                                <>
                                    <Card style={{ width: '18rem' }} key={ind} className="m-2 card">
                                        <Card.Body>
                                            <Card.Title>{ele.albumId}</Card.Title>
                                            <Card.Img variant="top" src={ele.url} />
                                            <Card.Text>{ele.id}</Card.Text>
                                            <Card.Text>{ele.title}</Card.Text>
                                            <Button variant="primary"><a href={ele.thumbnailUrl} className="text-white" src="">Show Here</a></Button>
                                        </Card.Body>
                                    </Card>

                                </>
                            )
                        })
                    }
                    </div>
        </div>
    )
}
export default Photos;