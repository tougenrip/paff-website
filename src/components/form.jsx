import React from 'react'
import Button from './button';

export default function MyForm() {
    return (
      <>
        <label >
          <input className='appearance-none w-full my-2 mt-10 p-3 text-black bg-black bg-opacity-60 rounded-lg placeholder-red-500 placeholder-opacity-50' name="walletInput" placeholder='WalletID' />
        </label>
        <br/>
        <label >
          <input className='appearance-none w-full my-2 p-3 text-black bg-black bg-opacity-60 rounded-lg  placeholder-red-500 placeholder-opacity-50' name="emailInput" placeholder='E-mail' />
        </label>
        <br/>
        <label >
          <input className='appearance-none w-full mt-2 mb-4 p-3 text-black bg-black bg-opacity-60 rounded-lg  placeholder-red-500 placeholder-opacity-50' name="discordInput" placeholder='Discord User id' />
        </label>
        <Button>Join</Button>
      </>
    );
  }