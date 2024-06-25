import React, { useState, useEffect } from 'react';
import HeaderMain from '../header/headerMain';
import Button from 'react-bootstrap/Button';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { userAPI } from '../../API/userAPI';
import AddStatusModal from './comp/addStatusModal';

const AdminPanelMain = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAPI.getStatus());
    }, [])
    const statusList = useSelector(state => state.userReducer.statusList);
    console.log("получили список из стейта ", statusList);

    const [statusId, setStatusId] = useState('');
    const onChange = (value) => {
        console.log(`selected ${value}`);
        setStatusId(value);
    };

    //модальное окно добавления должности
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <HeaderMain />
            <div>
                <h4>Список Должностей</h4>
                <Button variant="success" onClick={handleShow}>Добавить Должность</Button>
                <AddStatusModal show={show} handleClose={handleClose} />
                <div>
                    Редактировать должность
                    <Select style={{ width: "90%", border: "#000000" }} showSearch
                        placeholder="Выберите должность для редактирования"
                        optionFilterProp="label"
                        onChange={onChange}
                        // onSearch={onSearch}
                        options={statusList}
                    />
                    <Button variant="warning">Редактировать</Button>{' '}
                </div>

            </div>

        </div>

    )

}

export default AdminPanelMain;