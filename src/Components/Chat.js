import React from 'react'
import '../Css/Chat.css'
import Avatar from '@material-ui/core/Avatar'
import { useState, useEffect } from 'react'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import AttachFile from '@material-ui/icons/AttachFile'
import IconButton from '@material-ui/core/IconButton'
import MoreVert from '@material-ui/icons/MoreVert'
import { InsertEmoticonOutlined } from '@material-ui/icons'
import { MicOutlined } from '@material-ui/icons'

function Chat() {

    //For setting random avatar icons------------

    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 1000))
    }, [])

    // ------------------------------------------

    //Keeping track of message updates-----------

    const [input, setInput] = useState("")

    const handleOnInputChange = (e) => {
        setInput(e.target.value)
    }

    const sendMessage = (e) => {
        e.preventDefault()
        let inpText = document.getElementById('message')
        inpText.value = ""
    }

    // -------------------------------------------

    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat-header-info">
                    <h3>Room name</h3>
                    <p>Description...</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat-body">
                <p className="chat-message chat-reciever">
                    <span className="chat-name">Balaji PJ</span>
                    Hey Guys
                    <span className="chat-timestamp">1:40pm</span>
                </p>

            </div>

            <div className="chat-footer">
                <InsertEmoticonOutlined />
                <form action="">
                    <input type="text" placeholder="Type a message" id="message" value={input} onChange={handleOnInputChange} />
                    <button type="submit" onClick={sendMessage}>Send message</button>
                </form>
                <MicOutlined />
            </div>
        </div>
    )
}

export default Chat
