import { Button } from "flowbite-react"
import FormInput from "./FormInput"
import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const FormSign = ({ signUp }) => {
    return (

        <form className="flex flex-col gap-4">
            {signUp && (
                <FormInput
                    labelValue={"username"}
                    type={"text"} placeholder='John Doe'
                    id='username' />
            )}
            <FormInput
                labelValue={"Your email"}
                type={"email"} placeholder='name@company.com'
                id='email' />
            <FormInput
                labelValue={"Your password"}
                type={"password"} placeholder='*********'
                id='email' />
            <Button className="w-full" outline gradientDuoTone="purpleToPink">
                {signUp ? 'Sign Up' : 'Sign In'}
            </Button>
            {!signUp ? (
                <div className="flex gap-2 text-sm mt-5">
                    <span>Do not have an account?</span>
                    <Link className='text-blue-500 hover:underline' to={'/signup'}> Sign Up</Link>
                </div>
            ) : (
                <div className="flex gap-2 text-sm mt-5">
                    <span>Have an account ?</span>
                    <Link className='text-blue-500 hover:underline' to={'/signin'}> Sign In</Link>
                </div>
            )}


        </form>
    )
}

export default FormSign