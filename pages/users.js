import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';

const User = ( { users } ) => (
    <div className="userlist-container">
        <Head>
            <title>Users</title>
        </Head>

        <header>
                <h1>List GitHub Users</h1>
        </header>
        <ul>
            { users.map( user => (
               <li key={user.id}>
                   <Link href={`/userdetail/${user.login}`}>
                    <a>{user.login}<img src={user.avatar_url}/></a>
                   </Link>
               </li> 
            )) }
        </ul>
       
        <style jsx>{`
    
                .userlist-container {
                    width: 100%;
                    max-width: 1180px;
                    padding: 0 30px;
                    margin: 32px auto;
                }

                header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                header h1{
                    font-size: 40px;
                }

                .userlist-container ul {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-gap: 24px;
                    list-style: none;
                }
                
                .userlist-container ul li{
                    background: #DCDCDC;
                    padding: 24px;
                    border-radius: 8px;
                    position: relative;
                }
                
                .userlist-container ul li a img{
                    width: 70px;
                    height: 70px;
                    border-radius: 8px;
                }

                .userlist-container ul li a{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 25px;
                    text-decoration: none;
                    color: black;    
                }
                
            `}</style>
    </div>
);

User.getInitialProps = async () => {
    const response = await axios.get(
        'https://api.github.com/users'
    );

    return { users: response.data };
}

export default User;