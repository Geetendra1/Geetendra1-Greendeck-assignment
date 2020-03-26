import React, { useState } from 'react'
import { Collapse, Radio } from 'antd';
const { Panel } = Collapse;


function Discount(props) {

    const [Value, setValue] = useState('0')

    const renderDiscount = () => (
        props.list &&  props.list.map((value) => (
            <Radio key={value._id} value={`${value._id}`}>{value.name}</Radio>
        ))
    )

    const handleChange = (event) => {
        setValue(event.target.value)
        props.handleFilters(event.target.value)
    }

    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                <Panel header="discount" key="1">
                    <Radio.Group onChange={handleChange} value={Value}>

                        {renderDiscount()}

                    </Radio.Group>
                </Panel>
            </Collapse>
        </div>
    )
}

export default Discount
