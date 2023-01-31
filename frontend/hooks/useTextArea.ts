import { ChangeEvent, useState } from "react"

export const useTextArea = (initValue: string) => {
    const [value, setValue] = useState<string | number>(initValue)

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    return { value, onChange }
}