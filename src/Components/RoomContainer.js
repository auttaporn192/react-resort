import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../Context'



function RoomContainer({contexts}){
    const {sortedRooms,rooms} = contexts
    return(           
    <div>
        <RoomsFilter rooms={rooms}/>
        <RoomsList rooms={sortedRooms}/>     
    </div>
                )
}

export default withRoomConsumer(RoomContainer)

