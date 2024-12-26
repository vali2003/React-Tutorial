import styles from "./Netflix.module.css";
import styled from 'styled-components'
export const SeriesCard = ({data}) => {
  // console.log(props);   
  const {id,img_url,name,rating,description,cast,genre,watch_url} = data;
  const VAli = styled.button({
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating > 8.5 ? "#7dcea0":"#ffdc6f"}`,
    color:"white",
    fontWeight:"bold",
    cursor:"pointer"
  })
//   const VAli = styled.button`
//   padding: 1.2rem 2.4rem;
//   border: none;
//   font-size: 1.6rem;
//   background-color: ${(props) => props.rating > 8.5 ? "#7dcea0" : "#ffdc6f"};  /* Correctly formatted */
//   color: white;
//   font-weight: bold;
//   cursor: pointer;
// `;
const Rating =styled.h3`
font-size: 1.6;
color: #7dcea0;
text-transform: capitalize;

`
  const ratingClass=rating > 8.5 ? styles.super_hit : styles.average;
    return (
      <li className={styles.card}>
        <div>
          <img 
            src={img_url} 
            alt={name}
            width="40%" 
            height="40%" 
          />
        </div>
        {/* <div className={styles["card-content"]}> */}
        <div className="flex flex-col gap-6 p-6 px-6">
        <h2>Name: {name}</h2>
        <Rating>
          Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p className="text-3xl font-bold underline text-cyan-300">Comments: {description}</p>
        <p>Genre: {genre.join(",")}</p>
        <p>Cast: {cast.join(",")}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          {/* <button style={btn_style}>Watch Now</button> */}
          <VAli>Watch Now</VAli>
        </a>
       </div>
      </li>
    );
  };
  
  export default SeriesCard;
  