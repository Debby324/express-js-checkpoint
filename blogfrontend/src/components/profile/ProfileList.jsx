import ProfileCard from './ProfileCard'
import { useState, useEffect } from 'react'

const ProfileList = () => {
    const [users, setUsers] = useState([]);

    const fetchUser = async () => {
        const url = "https://api.github.com/users";
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log("data", data);
            setUsers(data);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div>
            {users.map((person) => (
                <ProfileCard
                imgUrl={person.avatar_url}
                />
            ))}
        </div>
    )
}

export default ProfileList