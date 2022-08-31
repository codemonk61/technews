import React from 'react'
import { useGlobalContext } from './Context'
const Search = () => {
    const {query,searchItems}=useGlobalContext()
  return (
   <>
   <h1>Tech News Website</h1>
   <form>
    <div>
      <input type="text" placeholder='search here'
       value={query} 
       onChange={(e)=>searchItems(e.target.value)}
       />
    </div>
   </form>
   </>
  )
}

export default Search