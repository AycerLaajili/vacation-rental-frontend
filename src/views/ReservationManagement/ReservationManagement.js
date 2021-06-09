import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Table, Input, Button, Space, Modal, Calendar } from 'antd';
import { SearchOutlined, PlusOutlined, CalendarOutlined, UnorderedListOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import ReservationModal from './components/ReservationModal'






function ReservationManagement(props) {


    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isCalenderModalVisible, setIsCalenderModalVisible] = useState(false);
    const [data, setData] = useState(
        [
            {
                key: '1',
                identifiant: "740",
                periode: "1/6/2020-3/6/2020",
                nom: "Ahmed Abed",
                telephone: "24642979",
                etat: "paye",

            },
            {
                key: '2',
                identifiant: "741",
                periode: "4/4/2020-13/4/2020",
                nom: "Youssef Osbana",
                telephone: "56897432",
                etat: "non paye",

            },
            {
                key: '3',
                identifiant: "742",
                periode: "22/9/2020-26/9/2020",
                nom: "Mohamed Ghabari",
                telephone: "23563241",
                etat: "paye",

            },
            {
                key: '4',
                identifiant: "743",
                periode: "11/5/2020-31/5/2020",
                nom: "Naim Seliti",
                telephone: "44586325",
                etat: "paye",

            },

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
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
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
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();

        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    };

    const handleReset = clearFilters => {
        clearFilters();


        setSearchText('')
    };

    // Modal functions *********
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleAddHome = (values) => {
        console.log(values)

        const newData = [...data, values]
        setData(newData)

        setIsModalVisible(false);
    }

    const columns = [
        {
            title: 'Identifiant',
            dataIndex: 'identifiant',
            key: 'identifiant',
            width: '10%',
            ...getColumnSearchProps('identifiant'),
        },
        {
            title: 'Periode',
            dataIndex: 'periode',
            key: 'periode',
            width: '20%',
            ...getColumnSearchProps('periode'),
        },
        {
            title: 'Nom du client',
            dataIndex: 'nom',
            key: 'nom',
            ...getColumnSearchProps('nom'),
            width: '10%',
        },
        {
            title: 'Telephone client',
            dataIndex: 'telephone',
            key: 'telephone',
            width: '15%',
            ...getColumnSearchProps('telephone'),
        },
        {
            title: 'Etat',
            dataIndex: 'etat',
            key: 'etat',
            width: '20%',
            ...getColumnSearchProps('etat'),
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
    ];

    const onPanelChange = (value, mode) => {
        console.log(value, mode);
    }

    const showCalenderModal = () => {
        setIsCalenderModalVisible(true)
    }
    const handleCalenderOk = () => {
        setIsCalenderModalVisible(false);
    };

    const handleCalenderCancel = () => {
        setIsCalenderModalVisible(false);
    };

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

            <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={showModal}>
                Ajoute une maison
            </Button>

            <Table columns={columns} dataSource={data} />

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <ReservationModal onAddHome={(values) => { handleAddHome(values) }} />
            </Modal>

            <Modal title="Basic Modal" visible={isCalenderModalVisible} onOk={handleCalenderOk} onCancel={handleCalenderCancel}>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </Modal>
        </div>
    )

}



export default ReservationManagement;