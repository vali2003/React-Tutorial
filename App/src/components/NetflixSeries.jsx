import SeriesData from "../api/SeriesData.json";
import SeriesCard from "./SeriesCard";
// const Netflixseries = () =>{
//     return(
//     <ul>
//   {SeriesData.map((curElem) =>
//    <li key={curElem.id}>
//    <div>
//    <img src={curElem.img_url} alt={curElem.name} width="40%" height="auto" />
//    </div>
//    <h2>Name: {curElem.name}</h2>
//    <h3>Rating: {curElem.rating }</h3>
//    <p>Comments:{curElem.description}</p>
//    <p>Genre: {curElem.genre}</p>
//    <p>Cast : {curElem.cast}</p>
//    <a href={curElem.watch_url} target="_blank"><button>Watch Now</button></a>
//    </li>
// )}   
//     </ul> 
//     )
//    }


const NetflixSeries = () => {
  return (
    <ul>
      <li className="grid grid-three--cols">
      {SeriesData.map((curElem) => {
        return <SeriesCard key={curElem.id} data={curElem} />;
      })}
      </li>
    </ul>
  );
};


   export default NetflixSeries;