import React from 'react';
import './style.css';
import Search from '../Search/';
import BtnGroup from '../BtnGroup/';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// This combines the filter search input and the filter button group of dropdowns and buttons. 
function Bar({ inputValue, handleInputChange, resetBtn, sortBtn, children, handleSelectDropdown }) {
    return (
        <Row>
            <Col md={4}>
                <Search
                    inputValue={inputValue}
                    handleInputChange={handleInputChange} />
            </Col>
            <Col md={8} className="button-group">
                <BtnGroup resetBtn={resetBtn} sortBtn={sortBtn} children={children} handleSelectDropdown={handleSelectDropdown} />
            </Col>
        </Row>

    )
}


export default Bar;