import {NavBar} from "../Components/NavBar.jsx";
import './About.css'; 
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {ArrowLeft, ArrowRight} from 'lucide-react'; 
import studentImg from '../Assets/student.png';
import programmerImg from '../Assets/programmer.png';
import workerImg from '../Assets/worker.jpg';

const characters = [
    {
        id: 'stuent', 
        name: 'Student',
        tagline: 'cool student tagline',
        image: studentImg,
        route: '/Education'
    },
    {
        id: 'programmer', 
        name: 'Programmer',
        tagline: 'cool programmer tagline',
        image: programmerImg,
        route: '/Projects'
    },
    {
        id: 'worker', 
        name: 'Professional',
        tagline: 'cool working tagline',
        image: workerImg,
        route: '/Career'
    },
]; 

export function About() {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => setIndex((index + 1) % characters.length);
    const handlePrev = () => setIndex((index - 1 + characters.length) % characters.length);

    const handleClick = () => navigate(characters[index].route);
    
    return(
        <div className='about'>
            <h1 className='about-title'>Choose your character</h1>
            <div className='about-container'>
                <button onClick={handlePrev}>
                    <ArrowLeft size={48}/>
                </button>
                <div onClick={handleClick}>
                    <img
                        src={characters[index].image}
                        alt={characters[index].name}
                    />
                    <div>
                        <h2>
                            {characters[index].name}
                        </h2>
                        <p>
                            {characters[index].tagline}
                        </p>
                    </div>
                </div>
                <button onClick={handleNext}>
                    <ArrowRight size={48}/>
                </button>
            </div>
        </div>
    )
}