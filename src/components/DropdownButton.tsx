import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

interface Devices {
    setCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function DropdownButton({ setCategory }: Devices) {

    return (
        <div className='justify-center flex pb-4'>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Change devices
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setCategory('Smartphones')}>Smartphones</Dropdown.Item>
                    <Dropdown.Item onClick={() => setCategory('Laptops')}>Laptops</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}