import React from 'react'
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs';
import FoundationPrice from './../Main/FoundationPrice';
import GetCatalog from './../Main/GetCatalog';
import AllArtOrObj from './AllArtOrObj';

export default function ArtOrObjCatalog({artOrObj, currentPage, title}) {
  return (
    <div>
      <Breadcrumbs currentPage = {currentPage}/>
      <h2 className='fw-bold text-center py-5'>{title}</h2>
      <AllArtOrObj artOrObj={artOrObj}/>
      <FoundationPrice/>
      <GetCatalog/>
    </div>
  )
}
