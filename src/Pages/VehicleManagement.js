import React from 'react';
import { Table, PageHeader, Button,  } from 'antd';
import './VehicleManagement.css';

const VehicleManagement = () => {
    const columns = [
        {
            title: '',
            dataIndex: 'key',
        },
        {
            title: 'Vehicle ID',
            dataIndex: 'vehicleId',
            sorter: (a, b) => a.vehicleId - b.vehicleId,
        },
        {
            title: 'Type',
            dataIndex: 'type',
            sorter: (a, b) => a.type - b.type,
        },
        {
            title: 'Lock/Unlock',
            dataIndex: 'mode',
            sorter: (a, b) => a.mode - b.mode,
        },
        {
            title: 'Current Speed',
            dataIndex: 'currentSpeed',
            sorter: (a, b) => a.currentSpeed - b.currentSpeed,
        },
        {
            title: 'Battery Level',
            dataIndex: 'batteryLevel',
            sorter: (a, b) => a.batteryLevel - b.batteryLevel,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            sorter: (a, b) => a.status - b.status,
        },
        {
            title: 'Location',
            dataIndex: 'location',
            sorter: (a, b) => a.location - b.location,
        },
        {
            title: 'Last Updated',
            dataIndex: 'updatedAt',
            sorter: (a, b) => a.updatedAt - b.updatedAt,
        },
    ];

    const data = [
        {
            key: '1',
            vehicleId: 123456,
            type: 'Scooter',
            mode: 'Lock',
            currentSpeed: '0 km/h',
            batteryLevel: '100%',
            status: 'PARKING',
            location: '3.142,012',
            updatedAt: '2019-07-02 9.00AM',
        },
        {
            key: '2',
            vehicleId: 987654,
            type: 'Scooter',
            mode: 'Unlock',
            currentSpeed: '5 km/h',
            batteryLevel: '75%',
            status: 'MOVING',
            location: '2.125,114',
            updatedAt: '2019-07-02 10.00AM',
        },
        {
            key: '3',
            vehicleId: 569825,
            type: 'Scooter',
            mode: 'Unlock',
            currentSpeed: '0 km/h',
            batteryLevel: '50%',
            status: 'IDLING',
            location: '4.125,114',
            updatedAt: '2019-07-02 10.00AM',
        },
        {
            key: '4',
            vehicleId: 123456,
            type: 'Scooter',
            mode: 'Lock',
            currentSpeed: '0 km/h',
            batteryLevel: '15%',
            status: 'TOWING',
            location: '5.125,114',
            updatedAt: '2019-07-02 10.00AM',
        },
        {
            key: '5',
            vehicleId: 123456,
            type: 'Scooter',
            mode: 'Lock',
            currentSpeed: '0 km/h',
            batteryLevel: '0%',
            status: 'TOWING',
            location: '5.145,114',
            updatedAt: '2019-07-02 10.00AM',
        },
    ];

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div>
            <div className="header">
            <PageHeader
              className="site=page-header"
              title="Vehicle Management"
            /> 
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",

                padding: 5,
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              <Button type="primary">
                + New Vehicle
              </Button>
            </div>

           <Table 
              columns={columns} 
              dataSource={data} 
              onChange={onChange}
            />
        </div>
 
    )
}

export default VehicleManagement;