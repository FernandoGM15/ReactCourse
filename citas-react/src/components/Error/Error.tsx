import React from "react"

interface ErrorPropI {
    // message: string;
    children: React.ReactNode
}
const Error = ({ children }: ErrorPropI) => {
    return (
        <div className="bg-red-800 text-white p-3 text-center font-bold mb-3">
            <p>{children}</p>
        </div>
    )
}
export default Error