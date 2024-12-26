import './Ev.css';

export const EventHandling = () => {
  // Event handler function
  const handleButtonClick = (Event) => {
    console.log(Event);
    console.log(Event.target)
    console.log(Event.type);
    alert("Hey, I'm Vali!");
  };

const handleWelcomeUser = (Users) => {
  console.log(`Hey ${Users} Welcome `)
}

  return (
    <>
      <button className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>Click Me</button>
      <br></br>
      <br></br>
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded" onClick={() => handleButtonClick(Event)}>Click Me - 2</button>
       <br />
       <br />
       {/* inline event handlers */}
       <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 text-white font-bold py-2 px-4 rounded" onClick={(Event)=> console.log(Event)}>Inline Function</button>
    <br />
    <br />
    {/* function components with inline arrow functions */}
    <button className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded' onClick={() => alert("hey iam inline event function")}>inline arr fun</button>
    <br />
    <br />
     {/* passing arguments to events handlers */}
     <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleWelcomeUser("Vali")}>Click Me</button>
     <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleWelcomeUser("Lalu")}>Click Me</button>

    </> 
  );
};
