import Menu from './Menu'
import React, { useEffect } from 'react'

const Home = () => {

    useEffect(() => {
          
        const logueado = async () => {
            await axios.get('api/user')
        }

        logueado();
      
    }, [])

    return (
        <>
         
        </>
    )
}

export default Home
