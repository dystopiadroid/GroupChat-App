import { Avatar } from "@material-ui/core"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import IconButton from "@material-ui/core/IconButton"
import React, { useEffect, useState } from "react"
import '../Css/Sidebar.css'
import SidebarChat from "./SidebarChat"
import db from '../firebase'
import { collection, query, onSnapshot } from 'firebase/firestore'

function Sidebar() {

    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const q = query(collection(db, 'Rooms'))
        onSnapshot(q, (querySnapshot) => {
              querySnapshot.forEach(doc=>{
                  const data = {
                      id: doc.id,
                      ...doc.data()
                    }
                    setRooms(prevState => [...prevState, data])
                })
            setLoading(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar />
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar-search">
                <div className="sidebar-search-container">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>

            <div className="sidebar-chats">
                <SidebarChat addNewChat />
                {loading ? "loading..." : rooms.map((room) => (
                        <SidebarChat
                            key={room.id}
                            id={room.id}
                            name={room.Name} />)
                )}
            </div>

        </div>
    )
}

export default Sidebar
