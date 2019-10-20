import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from '../title/Title';

class Services extends React.Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemne, quod iucunde'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemne, quod iucunde'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemne, quod iucunde'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemne, quod iucunde'
      }
    ]
  };

  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((service, index) => {
            const { icon, title, info } = service;

            return (
              <article key={index} className='service'>
                <span>{icon}</span>
                <h6>{title}</h6>
                <p>{info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
