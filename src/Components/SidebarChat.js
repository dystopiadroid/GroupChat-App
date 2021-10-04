import React from 'react'
import '../Css/SidebarChat.css'
import Avatar from '@material-ui/core/Avatar'

function SidebarChat({addNewChat, id, name}) {
    const createChat = () =>{
         prompt("Enter the room name")
    }

    return addNewChat ? (
        <div onClick={createChat} className="sidebar-chat" >
            <h2>Add new chat</h2>
        </div>
    ) : (
        <div key={id} className="sidebar-chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`} />
            <div className="sidebar-chat-info">
                <h2>{name}</h2>
                <p>Last Message..</p>
            </div>
        </div>
    )
}

export default SidebarChat
