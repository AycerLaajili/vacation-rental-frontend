import React from 'react'
import { Card, Row, Col } from 'antd';

function About(props) {
    const { Meta } = Card;

    return (
        <div>
            <h2>Vacation Rental v1</h2>
            <p>
                This awsome website is created by :
            </p>
            <Row justify="space-around" align="middle">
                <Col span={4}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default About