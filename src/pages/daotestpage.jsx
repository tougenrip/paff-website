import React from 'react'
import { useState } from 'react';




const DaoTest = () => {

    const [title, setTitle] = useState("")
    const [proposer, setProposer] = useState("")
    const [body, setMessage] = useState("")
    
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/insert', {
            method: "post",
            body: JSON.stringify({ title, proposer, body }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Proposal Created Successfully!");
            setTitle("");
            setMessage("");
            setProposer("");
        }
    }


  return (
        <div className="logIn-form mt-20 text-center text-white">
            <form onSubmit={handleOnSubmit} className='grid columns-5 justify-items-center'>

                <input
                    className = "Name bg-zinc-800 p-5 rounded-full grid-cols-3 m-5 w-auto lg:w-[400px]" 
                    type="text"
                    placeholder="Proposal Title"
                    onChange={(e) => {setTitle(e.target.value)}}
                />


                <input 
                    className = "Role bg-zinc-800 p-5 rounded-full m-5 w-auto lg:w-[400px]"
                    type="text"
                    placeholder = "Proposer Name...." 
                    onChange={(e) => {setProposer(e.target.value)}}
                />


                <input 
                    className = "Role bg-zinc-800 p-5 rounded-full m-5 w-auto lg:w-[400px]"
                    type="text"
                    placeholder = "Message" 
                    onChange={(e) => {setMessage(e.target.value)}}
                />


                <button color='pink' className='bg-red-700 rounded-full m-5 p-2 w-36' type="submit">Submit</button>
            </form>

            <div>
            <button color='pink' onClick={fetchAllProposals} className='bg-red-700 rounded-full m-5 p-2 w-36' type="submit">Get Proposals</button>
            </div>
            </div>

            
  )
}

export default DaoTest