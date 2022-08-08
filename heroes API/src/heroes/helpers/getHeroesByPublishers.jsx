import React from 'react'
import {heroes } from '../data/heroesData'

export const getHeroesByPublishers = (publisher) => {

    const validaPublisher = ['DC Comics', ['Marvel Comics']]

    if (!validaPublisher.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`)
    }
  return (
    <div>
        <ul>
            {
                heroes.map(
                    hero => {
                        if (hero.publisher === publisher) {
                            return <li key={hero.id}>{hero.name}</li>
                        }
                    }
                )
            }
        </ul>
    </div>
  )

        }