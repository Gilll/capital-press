import Input from "antd/es/input";
import {useEffect, useState} from "react";

const NumericInput = ({ value, onChange, ...props }) => {
    const [curVal, setCurVal] = useState(value || "");

    useEffect(() => {
        setCurVal(value)
    },[value])

    return (
        <>
            <Input
                value={curVal}
                onChange={(e) => {
                    const { value } = e.target;
                    const numericValue = value.replace(/[^0-9]/g, '');
                    setCurVal(numericValue)
                    onChange(numericValue);
                }}
                {...props}
            />
        </>
    )
}

export default NumericInput;