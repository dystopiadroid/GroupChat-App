import React from 'react'
import '../Css/SidebarChat.css'
import Avatar from '@material-ui/core/Avatar'
import { useState, useEffect } from 'react'


function SidebarChat({addNewChat}) {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 3000))
    }, [])

    const createChat = () =>{
        console.log("Created new Chat")
    }

    return !addNewChat ? (
        <div className="sidebar-chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebar-chat-info">
                <h2>Group Name</h2>
                <p>Last Message..</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebar-chat" >
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat
