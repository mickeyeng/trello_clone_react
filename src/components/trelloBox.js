import React from 'react';
import { Button, Container, Col, Card, Row, CardBody, CardTitle } from 'reactstrap';



const TrelloBox = (props) => {
    return (
        <Col md="4">
            <Card>
                <CardTitle>
                    {props.post.title}
                </CardTitle>
                <CardBody>
                    {props.post.body}
                </CardBody>
            </Card>
        </Col>
    )
}

export default TrelloBox