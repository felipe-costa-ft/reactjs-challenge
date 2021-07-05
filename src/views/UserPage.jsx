import React, { useEffect, useState } from 'react';
import VisitingHeader from '../components/VisitingHeader';
import UserData from '../components/UserData';
import Navigator from '../components/Navigator';
import { useParams } from 'react-router';

import axios from 'axios';

const UserPage = props => {

    const [visiting, setVisiting] = useState({
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
        following: '',
        repos_url: ''

    });
    const { login } = useParams();

    useEffect(async () => {
        const user = await axios.get(`https://api.github.com/users/${login}`);

        setVisiting({
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
    });

    return (
        <React.Fragment>
            <VisitingHeader login={login} actual={visiting}/>
            <UserData userData={visiting}/>
            <Navigator />
        </React.Fragment>
    );
}

export default UserPage;