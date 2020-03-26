import React, { useState } from 'react'
import { Input } from 'antd';

function SearchFeature(props) {

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)

    }

    return (
        <div>
            <Input
                value={SearchTerms}
                onChange={onChangeSearch}
                placeholder="operand two .."
            />
        </div>
    )
}

export default SearchFeature
