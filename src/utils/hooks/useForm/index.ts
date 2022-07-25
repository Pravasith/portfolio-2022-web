import { ChangeEvent, useState } from "react"
import { useDebounce } from "use-debounce"

// My custom hook for handling input forms
export const useForm = <T>(initialValue: T) => {
    const [values, setValues] = useState<T>(initialValue)
    const [debouncedValues] = useDebounce(values, 800)

    return {
        values: debouncedValues,
        handler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            })
        },
    }
}
