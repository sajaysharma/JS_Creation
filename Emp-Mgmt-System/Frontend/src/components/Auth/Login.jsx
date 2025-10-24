import React, { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SubmitHandller = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center">
                <div className="border-2 p-10 rounded-xl  border-emerald-600">
                    <form
                        onSubmit={(e) => {
                            SubmitHandller(e)
                        }}
                        className="flex flex-col items-center justify-center">
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required
                            className="outline-none bg-transparent border-2 border-emerald-600 py-4 px-3 text-xl rounded-full placeholder:text-white "
                            type="email" placeholder="Enter email"
                        />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required
                            className="mt-5 outline-none bg-transparent border-2 border-emerald-600 py-4 px-3 text-xl rounded-full placeholder:text-white "
                            type="password" placeholder="Enter password"
                        />
                        <button className=" mt-7 outline-none text-white bg-emerald-600 border-white border-1 hover:bg-emerald-800 py-2 px-23 text-xl rounded-full ">Log In</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;