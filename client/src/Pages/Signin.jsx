import { Link } from "react-router-dom"
import FormSign from "../components/FormSign"



const Signin = () => {
    return (
        <main className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                <div className="flex-1">
                    <Link to={'/'} className='whitespace-nowrap  self-center text-4xl font-bold dark:text-white'>
                        <span className='bg-cyan-600 hover:bg-cyan-800 px-2 py-1 rounded-lg text-white'>Boda&#39;s</span>Blog
                    </Link>
                    <p className="text-sm mt-5 md:text-lg">Glad to have you in our great community find friends read articles, have fun.</p>
                </div>
                <div className="flex-1">
                    <FormSign />
                </div>
            </div>
        </main>
    )
}

export default Signin