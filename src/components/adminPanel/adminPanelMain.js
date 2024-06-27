import React, { useState, useEffect } from 'react';
import HeaderMain from '../header/headerMain';
import Button from 'react-bootstrap/Button';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { userAPI } from '../../API/userAPI';
import AddStatusModal from '../listOfManuals/addStatusModal';
import EditStatusModal from './comp/editStatusModal';
import './adminPanel.css';
// import AddOpfModal from './comp/addOpfModal';

const AdminPanelMain = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAPI.getStatus());
    }, [])
    const statusList = useSelector(state => state.userReducer.statusList);

    const [statusId, setStatusId] = useState('');
    const [statusLabel, setStatusLabel] = useState('');
    const onChange = (value, label) => {
        console.log(`selected ${value}`);
        setStatusId(value);
        setStatusLabel(label);
    };



    //модальное окно редактирования должности
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);



    return (
        <div>
            <HeaderMain />
            <div className='my-4 mx-5 adminPanelAll'>
                <h4>Список Должностей</h4>

                <div className='mt-3'>
                    <div>Редактировать должность</div>
                    <div className='mt-2'>
                        <Select showSearch
                            placeholder="Выберите должность для редактирования"
                            optionFilterProp="label"
                            onChange={onChange}
                            // onSearch={onSearch}
                            options={statusList}
                        />
                    </div>

                    <Button variant="warning" onClick={handleShowEdit} className='mt-2'>Редактировать</Button>
                    <EditStatusModal show={showEdit} handleClose={handleCloseEdit} id={statusId} label={statusLabel.label} />
                </div>
                {/* <h4 className='mt-4'>Добавление ОПФ(организационно-правовой формы)</h4> */}


            </div>

        </div>

    )

}

export default AdminPanelMain;