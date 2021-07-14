import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from './Title'

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
        const context = useContext(RoomContext)
        const {
            handleChange,
            type,
            capacity,
            price,
            maxPrice,
            minPrice,
            minSize,
            maxSize,
            breakfast,
            pets
        } = context
    let types = getUnique(rooms,'type')
    types = ['all',...types]
    types = types.map((item,index) => {
                            return (<option value={item} key={index}>
                            {item}
                            </option>)})
    let people =getUnique(rooms,'capacity')
    people = people.map((item,index) => {
        return ( <option value={item.capacity} key={index}>
        {item} 
        </option>)
    })
    
    return (
        <section className="filter-container">
            <Title title="search room" />
            <form className="filter-form" >
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">guest</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* price */}
                    <div className="form-group">
                        <label htmlFor="price">
                        room price ${price}
                        </label>
                        <input type="range" name="price" 
                        min={minPrice} max={maxPrice}
                        id="price" value={price} onChange={handleChange}
                        className="form-control"
                        />
                    </div>
                {/* end price */}
                
                {/*room size*/}
               <div className="form-group">
                <label htmlFor="minSize">room size</label>
                <div className="size-inputs">
                <input type="number" id="size" name="minSize" value={minSize} className="size-inputs"
                onChange={handleChange}/>         
                <input type="number" id="size" name="maxSize" value={maxSize} className="size-inputs"
                onChange={handleChange}/>
                </div>
                </div>
                {/*en room size */}

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" id="breakfast" name="breakfast" checked={breakfast}
                        onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
               

               
                    <div className="single-extra">
                        <input type="checkbox" id="pets" name="pets" checked={pets}
                        onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
               
            </form>
        </section>
    )
}
