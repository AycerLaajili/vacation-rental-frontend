import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Table, Input, Button, Space, Modal } from 'antd';
import { SearchOutlined, PlusOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';

import ReservationModal from './components/ReservationModal'

function ReservationManagement(props) {

    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState(
        [
            {
                key: '1',
                referance: "740",
                period: "1/6/2020 - 3/6/2020",
                clientName: "Mohamed Lajili",
                clientPhone: "24642979",
                payed: "payed",
            },
            {
                key: '2',
                referance: "741",
                period: "4/4/2020 - 13/4/2020",
                clientName: "Youssef Osbana",
                clientPhone: "56897432",
                payed: "not payed",
            },
            {
                key: '3',
                referance: "742",
                period: "22/9/2020 - 26/9/2020",
                clientName: "Mohamed Ghabari",
                clientPhone: "23563241",
                payed: "payed",
            },
            {
                key: '4',
                referance: "743",
                period: "11/5/2020 - 31/5/2020",
                clientName: "Naim Seliti",
                clientPhone: "44586325",
                payed: "payed"
            }
        ]
    )

    let searchInput

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        searchInput = node;
                    }}
                    placeholder={`menlawejchi 3ala ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
          </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
          </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText(selectedKeys[0])
                            setSearchedColumn(dataIndex)
                        }}
                    >
                        Filter
          </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890FF' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.select(), 100);
            }
        },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#FFC069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    })

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    }

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('')
    }

    // Modal functions *********
    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    const handleAddReservation = (values) => {
        const fromDate = values.period[0].format("DD/MM/YYYY")
        const toDate = values.period[1].format("DD/MM/YYYY")
        values.period = fromDate + ' - ' + toDate
        const newData = [...data, values]
        setData(newData)
        setIsModalVisible(false);
    }

    const columns = [
        {
            title: 'Referance',
            dataIndex: 'referance',
            key: 'referance',
            width: '10%',
            ...getColumnSearchProps('referance'),
        },
        {
            title: 'Period',
            dataIndex: 'period',
            key: 'period',
            width: '20%',
            ...getColumnSearchProps('period'),
        },
        {
            title: 'Client Name',
            dataIndex: 'clientName',
            key: 'clientName',
            ...getColumnSearchProps('clientName'),
            width: '15%',
        },
        {
            title: 'Client Phone',
            dataIndex: 'clientPhone',
            key: 'clientPhone',
            width: '15%',
            ...getColumnSearchProps('clientPhone'),
        },
        {
            title: 'Payed',
            dataIndex: 'payed',
            key: 'payed',
            width: '20%',
            ...getColumnSearchProps('payed'),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" shape="circle" icon={<SettingOutlined />} />
                    <Button type="primary" shape="circle" icon={<DeleteOutlined />} onClick={() => { handleDeleteHome(record) }} />
                </Space>
            ),
        },
    ]

    // -----------------
    const handleDeleteHome = (record) => {
        // step 1 : update the data
        const newData = data.filter((home) => {
            return home.key != record.key
        })
        // step 2 : set new data to state
        setData(newData)
    }

    return (
        <div>
            <div style={{ float: 'right' }}>
                <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={showModal}>
                    Add Reservation
                </Button>
            </div>

            <br />
            <br />

            <Table columns={columns} dataSource={data} />

            <Modal title="Add new reservation" visible={isModalVisible} footer={null} onCancel={handleCancel} >
                <ReservationModal onAddReservation={(values) => { handleAddReservation(values) }} onCancel={handleCancel} />
            </Modal>
        </div>
    )
}

export default ReservationManagement;