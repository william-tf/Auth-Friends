import React, {useState, useEffect} from 'react'
import FriendMaker from './FriendMaker'
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from './utils/auth'

const Friends = () => {
const [friend, setFriend] = useState([]);
const history = useHistory()

useEffect(() => {
    axiosWithAuth()
    .get('/friends')
    .then((res) =>{
        console.log('this is in friend', res);
        setFriend(res.data)
    })
    .catch(err => console.log(err))
}, [])


    return(
        <div className="container">
        <div>
            <h2> add peepos</h2>
        <FriendMaker />
        </div>
        <div>
        {friend.map((friend) => {
            return (
                <div>
            <h5>{friend.name}</h5>
            <h5>{friend.age}</h5>
            <h5>{friend.email}</h5>
                </div>
            )
        })}
        </div>
        </div>
    )
}

export default Friends
