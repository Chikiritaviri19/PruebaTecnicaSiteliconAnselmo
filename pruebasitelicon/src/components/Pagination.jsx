import React from 'react'

export const Pagination = ({fugitivesPerPage,totalFugitives,currentPage,setCurrentPage}) => {

const pageNumbers=[]

console.log(Math.ceil(totalFugitives/fugitivesPerPage))
for(let i=1;i <=Math.ceil(totalFugitives/fugitivesPerPage);i++){
  pageNumbers.push(i)
}

const onPreviousPage = () =>{
  setCurrentPage(currentPage -1)
}
const onNextPage = () =>{
  setCurrentPage(currentPage +1)
}
const onSpecificPage = (n)=>{
  setCurrentPage(n)
}

  return (
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a class={`pagination-previous ${currentPage ===1 ? 'is-disabled':''}`} onClick={onPreviousPage}>Anterior</a>
    <a class={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled':'' }`} onClick={onNextPage}>Siguiente</a>
    <ul class="pagination-list">
      
   {
    pageNumbers.map(noPage=>(
<li key={noPage}><a class={`pagination-link ${noPage === currentPage ? 'is-current':''}`} onClick={()=> onSpecificPage(noPage)} aria-label="Goto page 1">{noPage}</a></li>
    ))
   }
  
     
    </ul>
  </nav>
  )
}
