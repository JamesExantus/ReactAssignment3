//modal active but styling not showing for some reason 

function Modal({isVisible, isHandle}) {
    console.log(isVisible);
    if(!isVisible) {return null}
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm  ">
             <div className="max-w-xl w-144 mx-auto flex flex-col">
                <button className="text-white text-xl place-self-end">X </button>
        
         <form onSubmit={isHandle}
        className="selection:bg-blue-200 flex flex-col gap-2"
        >
          <h1>add new recipe to site</h1>
          <fieldset className="flex flex-col">
            <label htmlFor="title">Recipe Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-white border-4 focuse:outline-none"
              />
          </fieldset>

           <fieldset className="flex flex-col">
            <label htmlFor="title">Directions</label>
            <input
              type="text"
              name="directions"
              id="directions"
              className="bg-white border-4 focuse:outline-none"
              />
          </fieldset>

           <fieldset className="flex flex-col">
            <label htmlFor="title">Difficulty</label>
            <input
              type="text"
              name="Difficulty"
              id="Difficulty"
              className="bg-white border-4 focuse:outline-none"
              />
          </fieldset>
        

           <fieldset className="flex flex-col">
            <label htmlFor="title">Stars</label>
            <input
              type="text"
              name="stars"
              id="stars"
              className="bg-white border-4 focuse:outline-none"
              />
          </fieldset>
          
        </form>

             </div>
        </div>
       
    )

}




export default Modal;