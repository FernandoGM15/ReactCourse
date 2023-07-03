import React from "react"

interface MessagePropsI {
    children: React.ReactNode;
    type: string;
}
const Message = ({ children, type }: MessagePropsI) => {
    return (
        <div className={`alerta ${type}`}>
            {children}
        </div>
    )
}
export default Message