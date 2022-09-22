import React from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import FoundationPrice from '../FoundationPrice';
import GetCatalog from '../GetCatalog/GetCatalog';
import Tiles from '../Tiles/Tiles';

export default function MainPageWithTiles({tileElements, currentPage, title, to}) {
  return (
    <div>
      <Breadcrumbs currentPage = {currentPage}/>
      <Tiles tileElements={tileElements} to={to} title={title}/>
      <FoundationPrice/>
      <GetCatalog/>
    </div>
  )
}
