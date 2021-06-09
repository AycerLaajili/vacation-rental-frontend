import React from 'react';
import { Form, Input, InputNumber, Button, Col, Space, Divider } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    }
}

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
}

function HomeModalContent(props) {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        form.resetFields()
        props.onAddHome(values)
    }

    return (
        <div>
            <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name='referance' label="Referance"  >
                    <Input />
                </Form.Item>

                <Form.Item name='region' label="Region " >
                    <Input />
                </Form.Item>

                <Form.Item name='type' label="Type" >
                    <Input />
                </Form.Item>

                <Form.Item name='price' label="Price" >
                    <InputNumber />
                </Form.Item>

                <Form.Item name='description' label="Description">
                    <Input.TextArea />
                </Form.Item>

                <Divider />

                <Col span={12} offset={17}>
                    <Space >
                        <Button onClick={props.onCancel}>Cancel</Button>
                        <Button type="primary" htmlType="submit">OK</Button>
                    </Space>
                </Col>
            </Form>
        </div>
    )
}

export default HomeModalContent;