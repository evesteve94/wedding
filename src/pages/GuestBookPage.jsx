import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { getTimeStamp } from "../assets/GlobalAssets";
//vår databas
import { db, auth } from "../app/firebase";
//metoder för vår db VIKTIG (collection - posts)
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { FaPlusCircle, FaHeart } from "react-icons/fa";

const GuestBookPage = () => {
  // Lagra filmerna från firebase så vi kan visa dem - READ
  const [postList, setPostList] = useState([]);

  // States för att hantera inputs för att skapa en ny film - CREATE
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostName, setNewPostName] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newDate, setNewDate] = useState("");

  // State för att kunna uppdatera en existerande film - UPDATE
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");

  //hämta collection referens - beöver db och collection som ska hämtas
  const postsCollection = collection(db, "posts");

  //GET GET GET GET
  const getPostsList = async () => {
    try {
      // READ DATA FROM DATABASE
      // SET THE postLIST STATE
      const response = await getDocs(postsCollection);
      const data = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      //lägger till i lokalt state
      setPostList(data);
      setNewPostTitle("");
      setNewPostContent("");
      setNewDate("");
      setNewPostName("");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostsList();
  }, []);

  //CREATE CREATE CREATE
  const handleAddPost = async () => {
    try {
      //tar in för samling + {object med egenskaper + värden from form}
      await addDoc(postsCollection, {
        title: newPostTitle,
        id: nanoid(),
        content: newPostContent,
        name: newPostName,
        timeStamp: getTimeStamp(),
      });
      //callar på get - har useEffect
      getPostsList();
    } catch (err) {
      console.error(err);
    }
  };

  // DELETE DELETE DELETE
  const handleDeletePost = async (id) => {
    try {
      //doc behöver tre argument - db, collection namn - id
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
      getPostsList();
    } catch (err) {
      console.error(err);
    }
  };

  //UPDATE UPDATE UPDATE
  const handleUpdatePost = async (id) => {
    try {
      const postDoc = doc(db, "posts", id);
      await updateDoc(postDoc, {
        title: updatedTitle,
        content: updatedContent,
      });
      getPostsList();
      setUpdatedTitle("");
      setUpdatedContent("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <div className="guest-book">
        <h2 style={{ marginBottom: "1rem" }}>
          {" "}
          <FaHeart /> Guest Book <FaHeart />
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
              {/* <button onClick={() => handleDeletePost(post.id)}>
                Delete post
              </button> */}
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

export default GuestBookPage;
