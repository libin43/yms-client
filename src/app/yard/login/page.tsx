'use client'
import { useState } from "react"
import { InputBox } from "@/components/input_field/InputBox";
import { useMutation } from "@apollo/client";
import { YARD_LOGIN } from "@/fetch/mutations";

export default function YardLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const [onSubmitMutation, {data, loading, error}] = useMutation(YARD_LOGIN, {
        variables:{
            input: {
                yard_email: email,
                password: password,
              }
        }
    })
    console.log(data, 'its data');
    console.log(loading, 'its loading');
    // console.log(error, 'its error');
    
    
    


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            await onSubmitMutation();
        } catch (error) {
            console.log(error, 'form submit catch error');
            
        }
    }

    
    return(
        <div>
            <form onSubmit={onSubmit}>
                <span>Login Page</span>
            <div>email</div>
        <InputBox
        name={'email'}
        type={'email'}
        value={email}
        style={"text-black"}
        onChange={(value)=>setEmail((prev) => (value !== prev ? value: prev))}/>

        <div>password</div>
        <InputBox
        name={'password'}
        type={'text'}
        value={password}
        style={"text-black"}
        onChange={(value)=>setPassword((prev) => (value !== prev ? value: prev))}/>

        <button type="submit">submit</button>

            </form>
        </div>
    )
}