import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Zoom from 'react-reveal/Zoom';


const Cards = ({ data }) => {

    return (

        <div className='cards'>
            {
                data.length ? (

                    data.map((item, i) => {
                        return (
                            <Row key={i} className='Card my-3 mx-2'>
                                <Zoom>
                                    <Col >
                                        <Card className='d-flex flex-row shadow-sm MyCard row' style={{ backgroundColor: "#FAFAFA" }}>
                                            <Col sm="12" md="3" className='p-0 imagCardFather'>
                                                <Card.Img className='imagCard' variant="top" src={item.image} style={{ width: "100%", height: "100%" }} />
                                            </Col>
                                            <Col sm="12" md="9" className='p-0'>
                                                <Card.Body >
                                                    <Card.Text className='d-flex justify-content-between align-item-center'>
                                                        <h3>
                                                            {item.title}
                                                        </h3>
                                                        <span style={{ color: "#198754", fontSize: "18px", fontWeight: "500" }}>
                                                            {item.price}
                                                        </span>
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <p >
                                                            {item.info}
                                                        </p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>
                                        </Card>
                                    </Col>
                                </Zoom>

                            </Row>
                        )
                    })


                ) : (<h1 style={{ textAlign: "center", color: "red", justifyContent: "center", alignItems: "center", display: "flex", height: "30vh", fontWeight: "600" }}>لا يوجد أصناف  </h1>)
            }
        </div >

    );
}

export default Cards;