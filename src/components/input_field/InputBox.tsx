import { useState } from "react"
import InputBoxProps from "../../../types/common/common.type"

export const InputBox: React.FC<InputBoxProps> = ({ name, type, value, style, onChange }) => {

    // const handleChange = (e) => {

    // }

    console.log(value, 'val is input');
    

    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                className={style}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}