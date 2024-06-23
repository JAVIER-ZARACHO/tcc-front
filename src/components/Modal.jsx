import { useState } from "react";
import Enlace from "./Enlace";

const Modal = (props) => {

    const { handle, message, title, cancelHandle, confirm } = props

    const ConfigProps = {
        message: message ? message : "Default",
        title: title ? title : "Default Title",
    }

    return (
        <>


            <div className={`bg-black w-full h-full flex items-center justify-center content-center fixed top-0 left-0 bg-opacity-50 `}>

                <div className="bg-white  text-slate-950 rounded">
                    <div className="p-5">
                        <h2 className=" text-3xl">{ConfigProps.title}</h2>
                    </div>
                    <div className="p-5">
                        {ConfigProps.message}
                    </div>
                    <div>
                        <div className=" w-[64px] h-[64px] absolute top-2 right-2 hover:cursor-pointer" onClick={(e) => cancelHandle()}>
                            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#ffffff"></path> </g></svg>
                        </div>
                    </div>
                    <div>
                        {confirm && <div className="flex p-2"><Enlace modal handle={confirm}>Confirmar</Enlace></div>}

                    </div>
                </div>
            </div>


        </>);
}

export default Modal;