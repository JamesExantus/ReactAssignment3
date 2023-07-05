import { useState } from 'react'

import {RecipeList, List, SearchBar} from './RecipeList'
import {foods, filterItems,} from './recipes'
import './App.css';
import './styles.css';
import Modal from  './ui/modal';

const statuses = {
  1: "easy",
  2: "basic",
  3: "hard",
 
};

function App() {
 

 const [query, setQuery] = useState('');
 const [selectedStatus, setSelecetedStatus] = useState(1);
 const [isModalVisible, setIsModalVisible] = useState(false);
 const results = filterItems(foods, query);

 
 function handleChange(e) {
    setQuery(e.target.value);
  }


   const statusButtons = Object.keys(statuses).map(statusId => {
    return <button key={statusId} className={selectedStatus === parseInt(statusId) ? "bg-blue-500" : ""}
      onClick={() => setSelecetedStatus(parseInt(statusId))}
    >{statuses[statusId]}</button>
  })

  const showModal = () => {
    setIsModalVisible(true);

  }

   const hideModal = () => {
    setIsModalVisible(false);
  }

  const handleAddJobFormSubmit = (e) => {
    e.preventDefault();
  }

  const handleAddRecipe = (e) => {
    

  }


  return (
    
    <div>
    <div className="grid grid-cols-6 my-4">{statusButtons}</div>
    <div className="flex justify-between">
       <SearchBar
        query={query}
        onChange={handleChange}
      />
      <hr />
      <List items={results} />
      <div></div>
      <div><button className="bg-blue-500 px-4 py-2" onClick={showModal}>+ Add Recipe</button></div>
    </div>
   
  
  <Modal isVisible={isModalVisible} isHandle={handleAddJobFormSubmit} />

    </div>
     
    
  )
  

}
export default App

