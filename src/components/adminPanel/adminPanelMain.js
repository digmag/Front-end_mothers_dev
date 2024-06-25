import React, { useState, useEffect } from 'react';
import HeaderMain from '../header/headerMain';
import Button from 'react-bootstrap/Button';
import { Select } from 'antd';

const AdminPanelMain = () => {

    return (
        <div>
            <HeaderMain />
            <div>
                <h4>Список Должностей</h4>
                <Button variant="success">Добавить Должность</Button>{' '}
                Редактировать должность
                <Select options={[{ value: "jack", label: "Jack" }]} />
            </div>

        </div>

    )

}

export default AdminPanelMain;