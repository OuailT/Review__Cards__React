import React, { useState } from 'react'
import people from '../Components/Data/Data';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Slide = () => {
    const [index, setIndex] = useState(0)
    const { name, job, image, text} = people[index];
    

    //Check the index Function
    const checkNumber = (number) => {  
        if (number === people.length -1) {
            return 0;
        }
        
        if ( number === 0) {
            return people.length -1;
        }

        return number;

    }

    //prev Person function
    const nextPerson = () => {
        setIndex((index)=> {
            let newNext = index + 1
            return checkNumber(newNext);
        });
    }

    // Next Person function
    const prevPerson = () => {
        setIndex((index)=> {
            let prevNext = index - 1;
            return checkNumber(prevNext);
        });
    }

   //Get random Review
   const randomPerson = () => {
       let RandomNumber = Math.floor(Math.random() * people.length)
       console.log(RandomNumber);
       if( RandomNumber === index ) {
           RandomNumber = index + 1
       }
       setIndex(checkNumber(RandomNumber));
   }

    return (
        <article className="review">
            <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            </div>
            <h4 className="name">{name}</h4>
            <p className="job">{job}</p>
            <p className="text">{text}</p>
            <div className="btn-container">
                { index > 0 ? <button className="next-btn" onClick={prevPerson}>
                    <FaChevronLeft/>
                    </button> : <button className="next-btn" onClick={prevPerson}>
                    </button> }
                <button className="prev-btn" onClick={nextPerson}>
                <FaChevronRight/>
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>Random</button>
        </article>
    )
}

export default Slide
