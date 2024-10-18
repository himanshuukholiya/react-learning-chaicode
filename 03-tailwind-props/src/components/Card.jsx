import React from 'react';

// props -> keyword in react -> used to pass value -> value can also be passed directly {username}

// {username, buttonValue} -> directly passing without prompt

// {username || random} -> random is the default value -> pass while calling

function Card({username, buttonValue = "Visit Me -"}) {
  console.log(username)
  return (
    <div className='mt-5'>
      <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-lg">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://wallpapercave.com/wp/wp13240710.jpg" 
          alt="Profile Image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
          <h2 className="text-white text-2xl font-semibold">{username}</h2>
          <p className="text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?</p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700">
            {buttonValue} 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
