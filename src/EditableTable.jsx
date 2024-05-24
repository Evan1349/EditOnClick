import React, { useState, useEffect } from 'react';
import { Table, Button, Input } from 'antd';
import { setData, startEditing, stopEditing, saveRow } from './Redux/ReduxSlice';
import mockData from './Redux/MockData';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function EditableTable() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table.data);
  const editingKey = useSelector((state) => state.table.editingKey);
  const [editingValue, setEditingValue] = useState({});

  useEffect(() => {
    dispatch(setData(mockData));
  }, [dispatch]);

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    dispatch(startEditing(record.key));
    setEditingValue({ ...record });
  };

  const save = (key) => {
    dispatch(saveRow({ key, newRow: { ...editingValue } }));
    dispatch(stopEditing());
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Input
              value={editingValue.name}
              onChange={(e) => setEditingValue({ ...editingValue, name: e.target.value })}
              onPressEnter={() => save(record.key)}
            />
          );
        }
        return <div onDoubleClick={() => edit(record)}>{text}</div>;
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Input
              value={editingValue.age}
              onChange={(e) => setEditingValue({ ...editingValue, age: e.target.value })}
              onPressEnter={() => save(record.key)}
            />
          );
        }
        return <div onDoubleClick={() => edit(record)}>{text}</div>;
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Input
              value={editingValue.address}
              onChange={(e) => setEditingValue({ ...editingValue, address: e.target.value })}
              onPressEnter={() => save(record.key)}
            />
          );
        }
        return <div onDoubleClick={() => edit(record)}>{text}</div>;
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Input
              value={editingValue.email}
              onChange={(e) => setEditingValue({ ...editingValue, email: e.target.value })}
              onPressEnter={() => save(record.key)}
            />
          );
        }
        return <div onDoubleClick={() => edit(record)}>{text}</div>;
      },
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
      render: (text, record) => {
        if (isEditing(record)) {
          return (
            <Input
              value={editingValue.phone}
              onChange={(e) => setEditingValue({ ...editingValue, phone: e.target.value })}
              onPressEnter={() => save(record.key)}
            />
          );
        }
        return <div onDoubleClick={() => edit(record)}>{text}</div>;
      },
    },
  ];

  return (
    <div>
      <Table
        dataSource={data}
        columns={columns}
        rowClassName={(record) => (isEditing(record) ? 'editable-row' : '')}
      />
      <Button type="primary" onClick={() => console.log(data)}>Submit</Button>
    </div>
  );
}

export default EditableTable;
