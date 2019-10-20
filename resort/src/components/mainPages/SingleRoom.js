import React, { Component } from 'react';
import defaultBcg from '../../images/room-1.jpeg';
import Banner from '../banner/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../../Context';
import StyledHero from '../styledHero/StyledHero';
// import Hero from '../hero/Hero';

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className='error'>
          <h3>No Such Room Could Be Found...</h3>
          <Link to='/rooms' className='btn-primary'>
            Back To Rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              Back To Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {images.map((img, index) => {
              return <img key={index} src={img} alt={name} />;
            })}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity : {capacity}{' '}
                {{ capacity } === 1 ? 'person' : 'people'}
              </h6>
              <h6>{{ pets } ? 'pets are allowed' : 'no pets are allowed'}</h6>
              <h6>{{ breakfast } ? 'free breakfast included' : ''}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
