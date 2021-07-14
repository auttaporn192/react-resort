import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer }
  from 'react-icons/fa'

export default class Services extends Component {
    state={
      services: [
        {
          icon: <FaCocktail/>,
          title: 'Free cocktails',
          info: 'Open every day 06:00 am -08:00 pm. On Saturday and Sunday have a promotion 50% for luanch.'
        },
        {
          icon: <FaHiking/>,
          title: 'Free Hiking',
          info: 'llll'
        },
        {
          icon: <FaShuttleVan/>,
          title: 'Free Shuttle Van',
          info: 'llll'
        },
        {
          icon: <FaBeer/>,
          title: 'Stronger Beer',
          info: 'llll'
        },
        {
          icon: <FaBeer/>,
          title: 'Stronger Beer',
          info: 'llll'
        },
        {
          icon: <FaBeer/>,
          title: 'Stronger Beer',
          info: 'llll'
        }
      ]
    }

    render() {
      return (
        <section className="services">
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map((ser, index) => {
            return(
              <article key={index} className="service">
                <span>{ser.icon}</span>
                <h6>{ser.title}</h6>
                <p>{ser.info}</p>
              </article>
            )
            })}
          </div>
        </section>
      )
    }
}
