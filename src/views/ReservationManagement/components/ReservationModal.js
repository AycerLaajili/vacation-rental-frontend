import React from 'react';
import { Form, Input, InputNumber, Button, Select, DatePicker, Col, Space, Divider } from 'antd'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    }
}


function ReservationModal(props) {
    const { RangePicker } = DatePicker;
    const { Option } = Select;
    const [form] = Form.useForm();
    const onFinish = (values) => {
        form.resetFields()
        props.onAddReservation(values)
    }

    return (
        <div>
            <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} >
                <Form.Item name='referance' label="Referance"
                    rules={[{ required: true, message: 'Please enter referance!' }]}   >

                    <Input />
                </Form.Item>

                <Form.Item name='period' label="Period"
                    rules={[{ required: true, message: 'Please enter period!' }]} >
                    <RangePicker />
                </Form.Item>

                <Form.Item name='clientName' label="Client Name"
                    rules={[{ required: true, message: 'Please enter client name!' }]}  >
                    <Input />
                </Form.Item>

                <Form.Item name='clientPhone' label="Client Phone"
                    rules={[{ required: true, message: 'Please enter client phone!' }]}  >
                    <InputNumber />
                </Form.Item>

                <Form.Item name='payed' label="Payed"
                    rules={[{ required: true, message: 'Please enter payed or not payed!' }]} >
                    <Select style={{ width: 100 }} >
                        <Option value="payed">Payed</Option>
                        <Option value="not payed">Not Payed</Option>
                    </Select>
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

export default ReservationModal;