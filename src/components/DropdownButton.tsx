import React, { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

interface Devices {
    setCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function DropdownButton({ setCategory }: Devices) {

    return (
        <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Выбор устройств
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setCategory('Smartphones')}>Смартфоны</Dropdown.Item>
                <Dropdown.Item onClick={() => setCategory('Laptops')}>Планшеты</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}