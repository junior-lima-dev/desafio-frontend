import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';

const UserDetail = ({ userdetail }) => (
    <div>
        <Head>
            <title>User Detail</title>
        </Head>
        <h2>User Profile Card</h2>
        <div className="card">
            <img src={userdetail.avatar_url} width="100%"/>
            <h1>{userdetail.login}</h1>
            <p className="title">Name</p>
            <p>{userdetail.name}</p>
            <p className="title">Location</p>
            <p>{userdetail.location}</p>
            <p className="title">Blog</p>
            <p><a href={userdetail.blog}>{userdetail.blog}</a></p>
            <p className="title">Public Repositories</p>
            <p>{userdetail.public_repos}</p>
            <p className="title">Followers</p>
            <p>{userdetail.followers}</p>
            <p className="title">Following</p>
            <p>{userdetail.following}</p>

            <p><Link href="/">
               <button>Retornar</button> 
            </Link>
            </p>
        </div>
        <style jsx>{`
            h2 {
                text-align:center;  
            }

            .card {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                max-width: 300px;
                margin: auto;
                text-align: center;
                font-family: arial;
              }

            .title {
               color: grey;
               font-size: 18px;
            }

            button {
                border: none;
                outline: 0;
                display: inline-block;
                padding: 8px;
                color: white;
                background-color: #000;
                text-align: center;
                cursor: pointer;
                width: 100%;
                font-size: 18px;
            }

            a {
                text-decoration: none;
            }
                
        `}</style>
    </div>
);
/*

*/

UserDetail.getInitialProps = async ( { query} ) => {
    const response = await axios.get(
        `https://api.github.com/users/${query.user}`
    );

    return { userdetail: response.data }
}

export default UserDetail;
