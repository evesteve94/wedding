import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getTimeStamp } from "../assets/GlobalAssets";
import { db, auth } from "../app/firebase";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { FaPlusCircle, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Jelly from "../assets/img/jellyfish.png";

const GuestBookPage = () => {
  const [postList, setPostList] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostName, setNewPostName] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [nameError, setNameError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading indicator

  const postsCollection = collection(db, "posts");

  const getPostsList = async () => {
    try {
      const response = await getDocs(postsCollection);
      const data = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostList(data);
      setNewPostTitle("");
      setNewPostContent("");
      setNewPostName("");
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostsList();
  }, []);

  const handleAddPost = async () => {
    if (!newPostName) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!newPostTitle) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
    if (!newPostContent) {
      setContentError(true);
    } else {
      setContentError(false);
    }

    if (newPostName && newPostTitle && newPostContent) {
      try {
        await addDoc(postsCollection, {
          title: newPostTitle,
          id: nanoid(),
          content: newPostContent,
          name: newPostName,
          timeStamp: getTimeStamp(),
        });
        getPostsList();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const renderGuestBook = () => {
    if (!auth.currentUser) {
      return (
        <div className="guest-book">
          <h2>Du är utloggad!</h2>
          <p>
            Du måste ha ett konto och vara inloggad för att se och publicera
            meddelanden i gästboken.
          </p>
          <br />
          <p>
            Klicka på länken nedan för att logga in eller skapa ett konto 💜
          </p>
          <Link to="/login">Till Login</Link>
        </div>
      );
    }
    return (
      <main>
        <div className="guest-book">
          <h2 style={{ marginBottom: "1rem" }}>
            {" "}
            <FaHeart /> Gästbok <FaHeart />
          </h2>{" "}
          <div className="post-form">
            <h3>Skriv ett meddelande</h3>
            <input
              type="text"
              value={newPostName}
              onChange={(e) => setNewPostName(e.target.value)}
              placeholder="Ditt Namn..."
            />
            {nameError && <p className="error">Namn saknas</p>}
            <input
              type="text"
              placeholder="Titel..."
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
            />
            {titleError && <p className="error">Titel saknas</p>}
            <textarea
              type="text"
              placeholder="Ditt Meddelande..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
            {contentError && <p className="error">Meddelande saknas</p>}
            <button className="add-post" onClick={handleAddPost}>
              {" "}
              Publicera <FaPlusCircle />
            </button>
          </div>
          {loading ? (
            <p>Loading...</p> // Show loading indicator while data is being fetched
          ) : (
            <ul className="message-list" style={{ listStyle: "none" }}>
              {postList
                .sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp)) // Sort posts based on timeStamp
                .map((post) => (
                  <li className="message" key={post.id}>
                    {" "}
                    <h3>{post.title} </h3> <p>{post.content}</p>
                    <p>
                      {" "}
                      Puss & Kram, <br /> {post.name}{" "}
                      <img style={{ height: "1.2rem" }} src={Jelly} alt="" />{" "}
                      <br />
                      {post.timeStamp}
                    </p>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </main>
    );
  };

  return <main>{renderGuestBook()}</main>;
};

export default GuestBookPage;
