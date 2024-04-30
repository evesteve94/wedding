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

const GuestBookPage = () => {
  const [postList, setPostList] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostName, setNewPostName] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

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
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostsList();
  }, []);

  const handleAddPost = async () => {
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
          </h2>
          <ul className="message-list" style={{ listStyle: "none" }}>
            {postList.map((post) => (
              <li className="message" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p>
                  {" "}
                  Puss & Kram, <br /> {post.name}
                </p>
              </li>
            ))}
          </ul>
          <div className="post-form">
            <h3>Add Message</h3>
            <input
              type="text"
              value={newPostName}
              onChange={(e) => setNewPostName(e.target.value)}
              placeholder="Your Name..."
            />
            <input
              type="text"
              placeholder="Post title..."
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Your message..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
            <button className="add-post" onClick={handleAddPost}>
              {" "}
              <FaPlusCircle />
            </button>
          </div>
        </div>
      </main>
    );
  };

  return <main>{renderGuestBook()}</main>;
};

export default GuestBookPage;
