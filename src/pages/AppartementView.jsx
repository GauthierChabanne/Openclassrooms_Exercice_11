import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Tag from '../components/Tag'
import StarRating from '../components/StarRating'
import Dropdown from '../components/Dropdown'
import React from "react";
import '../style/pages/appartementView.css'

const appartementList = require('../data/appartementList.json')

function AppartementView () {
  const {appartementId} = useParams()
  const appartement = appartementList.find((appartement) => appartement.id === appartementId)

  return(
    <main className='cardInfos'>
      <Carousel
        title={appartement.title}
        pictures={appartement.pictures}
      />
      <div className="container">
        <section className='cardInfos__mainInfos'>
          <article className="cardInfos__mainInfos__appartementInfos">
            <header>{appartement.title}</header>
            <p>{appartement.location}</p>
          </article>
          <aside className='cardInfos__mainInfos__ownerInfos'>
            <p>{appartement.host.name}</p>
            <img src={appartement.host.picture} alt={appartement.host.name + ' picture'} />
          </aside>
        </section>
        <section className='cardInfos__secondaryInfos'>
          <article className='cardInfos__secondaryInfos__tags'>
            {appartement.tags.map((tag) => (
              <Tag
                key={tag}
                name={tag}
              />
            ))}
          </article>
          <aside className='cardInfos__secondaryInfos__rating'>
              <StarRating
                rating={appartement.rating}
              />
          </aside>
        </section>
        <section className='cardInfos__tertiaryInfos'>
          <React.Fragment>
            <Dropdown
              name="Description"
              infos={appartement.description}
            />
            <Dropdown
              name="Equipements"
              infos={appartement.equipments}
            />
          </React.Fragment>
        </section>
      </div>
    </main>
  )
}

export default AppartementView
