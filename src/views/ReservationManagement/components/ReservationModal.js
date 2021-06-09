import React from 'react';

import 'antd/dist/antd.css';

import { Form, Input, InputNumber, Button, Select, DatePicker, Space, } from 'antd';



const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const { RangePicker } = DatePicker;

const { Option } = Select;



/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

function ReservationModal(props) {

    return (
        <div>

            <Form {...layout} name="nest-messages" onFinish={props.onAddHome} validateMessages={validateMessages}>
                <Form.Item name='identifiant' label="Identifiant"  >
                    <Input />
                </Form.Item>

                <Form.Item name='periode' label="Periode " >
                    <Space direction="vertical" size={12}>
                        <RangePicker />


                    </Space>,
                </Form.Item>

                <Form.Item name='nom client' label="Nom Client" >
                    <Input />
                </Form.Item>

                <Form.Item name='telephone client' label="Telephone Client" >
                    <InputNumber />
                </Form.Item>

                <Form.Item name='etat' label="Etat">
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        <Option value="1">Paye</Option>
                        <Option value="2">Non Paye</Option>

                    </Select>,
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Valider
                 </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default ReservationModal;