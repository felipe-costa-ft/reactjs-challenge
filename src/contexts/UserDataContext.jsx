import React, { useState, createContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

export const UserDataContext = createContext();

const UserProvider = ({ children }) => {

     const [authenticated, setAuthenticated] = useState(false);

    const [userData, setUserData] = useState({
        login: '',
        name: '',
        email: '',
        location: '',
        company: '',
        bio: '',
        avatar_url: '',
        followers_url: '',
        following_url: '',
        organizations_url: '',
        starred_url: '',
        public_repos: '',
        public_gists: '',
        followers: '',
        following: ''
    });

    const getUserData = async (username) => {
        try {
            const user = await axios.get(`https://api.github.com/users/${username}`);

            setUserData({
                login: user.data.login,
                name: user.data.name,
                email: user.data.email,
                location: user.data.location,
                company: user.data.company,
                bio: user.data.bio,
                avatar_url: user.data.avatar_url,
                followers_url: user.data.followers_url,
                following_url: user.data.following_url,
                organizations_url: user.data.organizations_url,
                starred_url: user.data.starred_url,
                public_repos: user.data.public_repos,
                public_gists: user.data.public_repos,
                followers: user.data.followers,
                following: user.data.following,
                repos_url: user.data.repos_url

            });

            setAuthenticated(true);
        }
        catch (e) {
            alert('Usuário não encontrado!');
        }

    }

    return (
        <UserDataContext.Provider value={{ authenticated, setAuthenticated,userData, setUserData, getUserData }}>
            {children}
        </UserDataContext.Provider>
    );
}

export default UserProvider;