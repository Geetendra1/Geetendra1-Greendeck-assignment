import React, { useState } from 'react'
import { Input } from 'antd';


function SearchFeature1(props) {

    const [SearchTermsOne, setSearchTermsOne] = useState("")

    const onChangeSearch = (event) => {
        setSearchTermsOne(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)

    }

    return (
        <div>
            <Input
                value={SearchTermsOne}
                onChange={onChangeSearch}
                placeholder="operand one .."
            />
        </div>
    )
}

export default SearchFeature1
