import React, { useState, useEffect } from 'react';
import HeaderMain from '../header/headerMain';
import Button from 'react-bootstrap/Button';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { userAPI } from '../../API/userAPI';
import AddStatusModal from './comp/addStatusModal';
import EditStatusModal from './comp/editStatusModal';
import './adminPanel.css';
import AddPriceModal from './comp/addPriceModal';
import { contractAPI } from '../../API/contractAPI';
import { Table } from 'react-bootstrap';
import EditPriceModal from './comp/eidtPriceModal';
// import AddOpfModal from './comp/addOpfModal';

const AdminPanelMain = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAPI.getStatus());
        dispatch(contractAPI.getPrices(""))
    }, [])
    const statusList = useSelector(state => state.userReducer.statusList);

    const [statusId, setStatusId] = useState('');
    const [statusLabel, setStatusLabel] = useState('');
    const onChange = (value, label) => {
        console.log(`selected ${value}`);
        setStatusId(value);
        setStatusLabel(label);
    };

    //модальное окно добавления должности
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //модальное окно редактирования должности
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showAddPrice, setShowAddPrice] = useState(false);
    const handleAddPrice = () => {
        setShowAddPrice(true)
    }
    const handleCloseAddPrice = () => {
        setShowAddPrice(false);
    }
    const [showEditPrice, setShowEditPrice] = useState(false);
    const [editid, setEditid] = useState("");
    const handleEditPrice = (e) => {
        setEditid(e.target.getAttribute("idprop"));
        setShowEditPrice(true)
    }
    const handleCloseEditPrice = () => {
        setShowEditPrice(false);
    }

    const handleDelete = (e) => {
        dispatch(contractAPI.deletePrice(e.target.getAttribute("idprop")))
    }
    const statePrices = useSelector(state => state.contractReducer.priceList)

    return (
        <div>
            <HeaderMain />
            <div className='my-4 mx-5 adminPanelAll'>
                <h4>Список Должностей</h4>
                <Button variant="success" onClick={handleShow} className='mt-2'>Добавить Должность</Button>
                <AddStatusModal show={show} handleClose={handleClose} />
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

                <h4>Добавить позицию прайс листа</h4>
                <Button onClick={handleAddPrice}>Добавить</Button>
                <AddPriceModal show={showAddPrice} handleClose={handleCloseAddPrice}/>
                <Table>
                    <thead>
                        <th>Закон</th>
                        <th>Название</th>
                        <th>Цена</th>
                    </thead>
                    <tbody>
                        {statePrices.map(el => (
                            <tr key={el.id}>
                                <th>
                                    {el.law} фз.
                                </th>
                                <th>
                                    {el.name}
                                </th>
                                <th>
                                    {el.price}
                                </th>
                                <th>
                                    <Button variant='warning' idProp={el.id} onClick={handleEditPrice}>Изменить</Button>
                                    <EditPriceModal id={editid} law={String(el.law)} name={String(el.name)} price={String(el.price)} show={showEditPrice} handleClose={handleCloseEditPrice}/>
                                </th>
                                <th>
                                    <Button variant='danger' idProp={el.id} onClick={handleDelete}>Удалить</Button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        </div>

    )

}

export default AdminPanelMain;