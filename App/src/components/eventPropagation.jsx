  import "./EV.css"
  
  
  export    const EventPropagation = () => {

const handleGrandParent = () => {
    console.log("grandParent clicked");
};
const handleParentClick = () => {
    console.log("parent clicked");
};
const handleChildClick = (Event) => {
    console.log(Event);
    Event.stopPropagation();
    console.log("child clicked");
};

    return (

        <section className="main-dev">
            <div className="g-div" onClickCapture={handleGrandParent}>
     <div className="p-div" onClickCapture={handleParentClick}>
    <button className="c-div bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded" onClickCapture={handleChildClick}>Child Div</button>
     </div>
            </div>
        </section>
    )
}