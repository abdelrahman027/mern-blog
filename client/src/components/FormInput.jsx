import { Label, TextInput } from 'flowbite-react'


// eslint-disable-next-line react/prop-types
const FormInput = ({ labelValue, ...props }) => {
    return (
        <div>
            <Label value={labelValue} />
            <TextInput {...props} />
        </div>
    )
}

export default FormInput