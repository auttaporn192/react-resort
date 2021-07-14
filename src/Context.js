import React, { Component } from 'react'
import items from './data.js'

const RoomContext = React.createContext()
class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type:'all',
        capacity:1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    // getData
    componentDidMount () {
        const rooms = this.formatData(items)
        const featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
    }

    getRoom = slug => {
        const tempRoom = this.state.rooms.find(rm => rm.slug === slug)
        return tempRoom
    }

    formatData (items) {
        const tempItem = items.map(item => {
            const id = item.sys.id
            const images = item.fields.images.map(image => image.fields.file.url)
            const room = { ...item.fields, images, id }
            return room
        })
        return tempItem
    }

    handleChange = e => {
        const target = e.target
        const name = e.target.name
        const value= target.type === "checkbox" ? target.checked : target.value

        
        this.setState({[name]:value},this.filterRooms) //name = type
    }
    filterRooms = () => {
        let{
            rooms,type,capacity,price,minSize,maxSize,pets, breakfast
        } = this.state
        let tempRooms = [...rooms];
        if (type !== 'all'){
            tempRooms = tempRooms.filter(item => item.type === type)
        }
        if (capacity !== 1){
            tempRooms = tempRooms.filter(item => item.capacity >= capacity)
        }
        
       tempRooms = tempRooms.filter(item => item.price <= price)
       tempRooms = tempRooms.filter(item => item.size >= minSize)
       tempRooms = tempRooms.filter(item => item.size <= maxSize)

       if (breakfast){
       tempRooms = tempRooms.filter(item => item.breakfast === true)
       }
       console.log(`breakfase = ${breakfast}`)
        if (pets){
       tempRooms = tempRooms.filter(item => item.pets === true)
       }
        this.setState({sortedRooms:tempRooms})
    }
    render () {
        return (
            <RoomContext.Provider value={{ ...this.state, 
            getRoom: this.getRoom ,
            handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>

        )
    }
}
//const RoomConsumer = RoomContext.Consumer

export function  withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomContext>
            {value => <Component {...props} contexts={value}/>}
        </RoomContext>
}
}

export function withRoomImages(Component){
    return function ImagesWrapper(props){
        const price = 1000
        return (
            <>
            <Component {...props} newPrice={1000} />
           
            </>
        )
    }
}
            


export { RoomProvider, RoomContext }
