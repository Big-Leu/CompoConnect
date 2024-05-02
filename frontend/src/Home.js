import React, { useState } from 'react'
import './gift.css';
import axios from 'axios'

function Home() {
    const[author, setAuthor]= useState('') 
    const[comment, setComment]= useState('')
    // const [errors,setErrors]= useState({})
    const handleInput = (event) => {
        if(event.target.name==="author"){
            setAuthor(event.target.value);
        }else{
            setComment(event.target.value)
        }
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('/home', {author:author,comment:comment})
        .then(res=>{
            console.log(res)
            setAuthor('')
            setComment('')
        })
        .catch(err=>console.log(err));
    }
    // useEffect(() => {
    // // console.log(values);
    // }, [values]);
    return (
        <div>
            <div id="p1">
                <h1 id="tag1">Visit Kanpur Railway station</h1>
                <h3 id="tag2">Kanpur Railway Station: Where Journeys Begin and Memories Await!</h3>
            </div>
            <div id="p2">
                <div id="h12">
                    <h2 id="ac1">Top three activity to do at Railway Station</h2>
                </div>
                <div id="p2-warp">
                    <div id="ac21">
                        <img id="img-1" src="https://img.freepik.com/free-photo/people-watching-as-train-approaches_1353-227.jpg?w=2000" alt="People Watching" />
                        <h3>People-Watching</h3>
                        <p>Stations are bustling hubs filled with diverse individuals from all walks of life</p>
                    </div>
                    <div id="ac21">
                        <img id="img-1" src="https://static2.tripoto.com/media/filter/tst/img/OgData/1536230609_1536136815_collages_01.png" alt="Enjoy Local Cuisine" />
                        <h3>Enjoy Local Cuisine</h3>
                        <p>Many railway stations have small food stalls and vendors offering regional delicacies and street food.</p>
                    </div>
                    <div id="ac21">
                        <img id="img-1" src="https://www.re-thinkingthefuture.com/wp-content/uploads/2022/02/A6219-Railway-Architecture-An-Account-of-Top-10-Railway-Architecture-in-India-Image-5.jpg" alt="Explore the Station's Architecture" />
                        <h3>Explore the Station's Architecture</h3>
                        <p>Railway stations often showcase impressive architectural designs and historical significance.</p>
                    </div>
                </div>
            </div>
            <div id="p3">
                <div id="ag1">
                    <div id="img2">
                       
                    </div>
                    <div id="abgd">
                        <h2>Your Guide</h2>
                        <p>
                            "Good morning, everyone! My name is Ankur Baba, and I'll be your guide for this incredible journey through the enchanting city of Kanpur. As a lifelong lover of art, history, and the vibrant culture of this city, I am absolutely thrilled to be sharing my passion and expertise with all of you."
                        </p>
                        <h3>Ankur Baba</h3>
                    </div>
                </div>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div id="p4">
                    <div className="mb-3">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Author"
                        name='author'
                        value={author}
                        onChange={handleInput}
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                        className="form-control"
                        placeholder="Comment"
                        name='comment'
                        value={comment}
                        onChange={handleInput}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Post Comment
                    </button>
                </div>
        </form>
        </div>
    );
}

export default Home