import React, { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useAppDispatch } from '../hook/redux';
import { IProduct } from '../models/models'
import { fetchSmartphones } from '../store/actions/productActions';

interface Devices {
    setDevices: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export default function DropdownButton(setDevices: Devices) {
    const dispatch = useAppDispatch()

    const smartphonesHandler = () => {
        const data = dispatch(fetchSmartphones())
        // setDevices(data)
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Выбор устройств
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={smartphonesHandler}>Смартфоны</Dropdown.Item>
                <Dropdown.Item>Планшеты</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}