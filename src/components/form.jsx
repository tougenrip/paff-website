import React from 'react'
import Button from './button';

export default function MyForm() {
    return (
      <>
        <label >
          <input className='appearance-none my-2 mt-10 p-3 text-black bg-black bg-opacity-60 rounded-lg placeholder-red-500 placeholder-opacity-50' name="myInput" placeholder='WalletID' />
        </label>
        <br/>
        <label >
          <input className='appearance-none my-2 p-3 text-black bg-black bg-opacity-60 rounded-lg ' name="myInput" />
        </label>
        <br/>
        <label >
          <input className='appearance-none my-2 p-3 text-black bg-black bg-opacity-60 rounded-lg ' name="myInput" />
        </label>
        <Button>Join</Button>
      </>
    );
  }