/* eslint-disable react/prop-types */


const ErrorBlock = ({ errorTitle, errorDetails }) => {
    return (
        <div className="bg-red-200/50 w-fit border-2 border-gray-300 rounded-md p-4">
            <div className="flex gap-4">
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 bg-red-300 h-8 overflow-hidden rounded-full text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-700">{errorTitle}</h2>
            </div>
            <p className="p-2 text-gray-500">{errorDetails}</p>
        </div>
    )
}

export default ErrorBlock