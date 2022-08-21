import React from 'react'
import {Searchbox, SearchInput, Background, Tilte, Search} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
    return (
      <Background>
      <Searchbox>
        <Search>
        <Tilte>
        Epicure works with the top
        <br/>
        chef restaurants in Tel Aviv
        <br/>
        </Tilte>
        <SearchInput placeholder="Search for restaurant cuisine, chef"/>
        <FontAwesomeIcon icon={faSearch}/>

        </Search>
        </Searchbox>

      </Background>
    )
  }