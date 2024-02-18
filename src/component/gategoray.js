import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const Gategorays = ({ filterbyCategory, arrTypeCat }) => {
    //filter by cat 
    const onfilter = (cat) => {
        filterbyCategory(cat)
    }
    return (
        <Row className='Gategorays mt-2 mb-4'>
            <Zoom >
                <Col className='d-flex justify-content-center' sm="12">
                    <div className='d-flex justify-content-center flex-wrap' style={{ width: "100%" }}>

                        {
                            arrTypeCat.length >= 1 ? (arrTypeCat.map((item) => {
                                return (
                                    <Button onClick={() => onfilter(item)} variant='success ' className='MyBtn' style={{ marginLeft: "1%" }}>{item} </Button>
                                )
                            })) : (<h1 style={{ textAlign: "center", color: "red", justifyContent: "center", alignItems: "center", display: "flex", height: "30vh", fontWeight: "600" }}>لا يوجد أصناف  </h1>)
                        }
                    </div>
                </Col>
            </Zoom>
        </Row>
    );
}

export default Gategorays;