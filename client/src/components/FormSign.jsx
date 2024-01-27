import { Button, Spinner } from "flowbite-react"
import FormInput from "./FormInput"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import ErrorBlock from "./ErrorBlock"


// eslint-disable-next-line react/prop-types
const FormSign = ({ signUp }) => {
    const [fd, setFd] = useState({});
    const [formError, setFormError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    function handleChange(e) {
        setFd({ ...fd, [e.target.id]: e.target.value.trim() })
    }



    //SUBMIT FUNCTION
    async function handleSubmit(e) {
        e.preventDefault();

        if (!fd.email || !fd.password)
        {
            setFormError("Please fill all inputs");
            return;
        }

        try
        {
            setFormError(null)
            setLoading('true')
            const res = await fetch(`/api/auth/${signUp ? 'signup' : 'signin'}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fd)
            });


            const data = await res.json();
            if (data.success === false)
            {
                if (data.message.split(" ")[0] === 'E11000')
                {
                    setLoading(false)
                    return setFormError("Email or Username is already been used.")
                }
                else
                {
                    setLoading(false);
                    return setFormError(data.message)
                }
            }
            if (res.ok)
            {
                navigate('/signin')
            }

        } catch (error)
        {
            setFormError(error.message)
        }
        setLoading(false);
    }



    return (

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {signUp && (
                <FormInput
                    labelValue={"username"}
                    type={"text"} placeholder='John Doe'
                    id='username'
                    name="username"
                    onChange={handleChange}
                />
            )}
            <FormInput
                labelValue={"Your email"}
                type={"email"} placeholder='name@company.com'
                id='email'
                name="email"
                onChange={handleChange}
            />
            <FormInput
                labelValue={"Your password"}
                type={"password"} placeholder='*********'
                id='password'
                name="password"
                onChange={handleChange}
            />
            <Button disabled={loading} type="submit" className="w-full" outline gradientDuoTone="purpleToPink">
                {loading ? <><Spinner size={'sm'} /> <span className="pl-2">Loading...</span></> : signUp ? 'Sign Up' : 'Sign In'}
            </Button>
            {!signUp ? (
                <div className="flex gap-2 text-sm mt-5">
                    <span>Do not have an account?</span>
                    <Link className='text-blue-500 hover:underline' to={'/signup'}> {'Sign up'}</Link>
                </div>
            ) : (
                <div className="flex gap-2 text-sm mt-5">
                    <span>Have an account ?</span>
                    <Link className='text-blue-500 hover:underline' to={'/signin'}> {'Sign up'}</Link>
                </div>
            )}
            {formError && <div className="mx-auto">
                <ErrorBlock errorTitle={"Error Sign you up"} errorDetails={formError} />
            </div>}
        </form>
    )
}

export default FormSign