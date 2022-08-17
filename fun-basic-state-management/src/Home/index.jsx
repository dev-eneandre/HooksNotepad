import React, { useState } from "react";
import "./style.css";
import "../theme/font.css";
import ToggleOn from "../assets/Images/svg/toggle__on.svg"
import ToggleOff from "../assets/Images/svg/toggle__off.svg"
import avatar from "../assets/Images/svg/nav__avatar.svg";


const Home = () => {

    const [theme, setTheme] = useState(false);
    const [title, setTitle ] = useState("");
    const [noteBodyText, setNoteBodyText ] = useState("");
    const [notelist, setNoteList ] = useState([
        {title: "notepad with hooks ", noteBody : "tofay is fonna be a great day "},
        {title: "shopping list ", noteBody : "is fonna be a great day tofay is fonna be a great day tofay is fonna be a great day tofay is fonna be a great day "},    
        {title: "shopping list ", noteBody : "tofay is fonna be a great day tofay is fonna be a great day tofay is fonna be a great day tofay is fonna be a great day tofay cardi beeee"},    
        {title: "shopping list ", noteBody : "be a great mrghan thee stallion"}    
    ])

    const ThemeToggler = () => {
        setTheme(!theme);
    }
 
    const saveNote = (event) => {
        event.preventDefault();

        setNoteList((nlist) => [...nlist, {title : title, noteBody : noteBodyText}] );
        setTitle("");
        setNoteBodyText("");
   
    }

    return(
        <div className={theme ? "home" : "home dark"}>
        {/* NAVBAR -> mY NOTES _ SEARCH BAR __ LOGGED IN USER (INTEND TO USE CONTEXT API TO HANDLE ITS STATE)  */}
          <div className="home__nav">
                <h4 className="home__nav__title">My Notes</h4>

                <form className="home__nav__form">
                    <input type="text" placeholder="search" />
                </form>

                <div className="home__nav__profile">
                    <h6>Andre Ene</h6>
                    <div className="home__nav__profile__avatar">
                        <img src={avatar} alt="some profile image" />
                    </div>
                </div>
                <div className="home__nav__toggler">
                    <img onClick={ThemeToggler} src={theme ? ToggleOn : ToggleOff } alt="toggle icon" />    
                </div>
          </div>

        {/* RECENT NOTES  */}

        {/* NEW NOTES  */}
            <div className="home__newNote">
                <form className="home__newNote__form">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Add a title...." />
                    <textarea value={noteBodyText} onChange={(e) =>setNoteBodyText(e.target.value)} placeholder="Write a new note"></textarea>
                    <button onClick={saveNote}>Save note</button>
                </form>
             </div>
        {/* ALL NOTES  */}
            <div className="home__allNotes">
                {notelist.map((list) => (<div className="home__allNotes__note">
                    <h4>{list.title}</h4>
                    <p>{list.noteBody}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Home;