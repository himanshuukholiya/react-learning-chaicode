import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    /* // used when we are not using loader 
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/himanshuukholiya")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
     */

    const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <div>Github Followers: {data.followers}</div>
        <img src={data.avatar_url} alt="himanshu" />
    </div>
  )
}

export default Github

export const GithubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/himanshuukholiya")
    return response.json()
}