import { ChangeEvent, useState } from "react"

export const useInput = (initValue: string | number, type: string) => {
    const [value, setValue] = useState<string | number>(initValue)

    function onlyNumber(str: string, digits: number) {
        if (str) {
            if (str.length <= digits) {
                str = str.replace(/\D/g, '')
            } else {
                str = str.replace(/\D/g, '')
                str = str.slice(0, digits)
            }
        }
        return str
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(type !== 'number')
        setValue(e.target.value)
    }
    const onInput = (e: any, digits?: number) => {
        if (type === 'number') {
            if(!digits){digits = 10}
            const val = onlyNumber(e.target.value, digits)
            setValue(val)
        }
    }
    return { value, onChange, onInput }
}