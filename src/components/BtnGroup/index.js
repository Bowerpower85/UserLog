import React from 'react';
import './style.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

// This button group allows the user to filter names from A-Z, Z-A, filter by Job Title, filter by Location Title, and reset all values.
function BtnGroup({ sortBtn, resetBtn, children, handleSelectDropdown }) {
    return (
        <ButtonGroup className="margin full-width">
            <Button onClick={sortBtn}>{children}</Button>

            <DropdownButton as={ButtonGroup} title="Title" id="bg-nested-dropdown" onSelect={handleSelectDropdown}>
                <Dropdown.Item eventKey="Front Man">Front Man</Dropdown.Item>
                <Dropdown.Item eventKey="Guitarist">Guitarist</Dropdown.Item>
                <Dropdown.Item eventKey="Bassist">Bassist</Dropdown.Item>
                <Dropdown.Item eventKey="Drummer">Drummer</Dropdown.Item>
            </DropdownButton>

            <DropdownButton as={ButtonGroup} title="Location" id="bg-nested-dropdown" onSelect={handleSelectDropdown}>
                <Dropdown.Item eventKey="Washington">Washington</Dropdown.Item>
                <Dropdown.Item eventKey="California">California</Dropdown.Item>
                <Dropdown.Item eventKey="Arizona">Arizona</Dropdown.Item>
            </DropdownButton>
            <Button onClick={resetBtn}>Reset</Button>
        </ButtonGroup>


    )
}


export default BtnGroup;