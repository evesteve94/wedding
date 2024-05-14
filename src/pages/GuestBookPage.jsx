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
import {
  FaPlusCircle,
  FaHeart,
  FaPen,
  FaTrash,
  FaSave,
  FaTimes,
} from "react-icons/fa";
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
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editedPostId, setEditedPostId] = useState("");
  const [editedPostTitle, setEditedPostTitle] = useState("");
  const [editedPostContent, setEditedPostContent] = useState("");

  const postsCollection = collection(db, "posts");

  const getPostsList = async () => {
    try {
      const response = await getDocs(postsCollection);
      const data = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostList(data);
      setLoading(false);
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
      return;
    }
    if (!newPostTitle) {
      setTitleError(true);
      return;
    }
    if (!newPostContent) {
      setContentError(true);
      return;
    }

    try {
      await addDoc(postsCollection, {
        title: newPostTitle,
        id: nanoid(),
        content: newPostContent,
        name: newPostName,
        email: auth.currentUser.email,
        timeStamp: getTimeStamp(),
      });
      getPostsList();
      setNewPostTitle("");
      setNewPostContent("");
      setNewPostName("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditPost = async (postId) => {
    try {
      await updateDoc(doc(db, "posts", postId), {
        title: editedPostTitle,
        content: editedPostContent,
      });
      setEditMode(false);
      getPostsList();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedPostId("");
    setEditedPostTitle("");
    setEditedPostContent("");
  };

  const handleDeletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      getPostsList(); // Fetch updated post list after deletion
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
          </h2>{" "}
          <div className="post-form">
            <p style={{ width: "70%" }}>
              Här kan ni publicera meddelanden under och efter bröllopet! Klicka
              på redigera-knappen <FaPen /> för att göra ändringar på era
              inlägg. Ni kan då även radera inlägget med <FaTrash /> knappen.
            </p>
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
            <p>Loading...</p>
          ) : (
            <ul className="message-list" style={{ listStyle: "none" }}>
              {postList.map((post) => (
                <li className="message" key={post.id}>
                  {editMode && editedPostId === post.id ? (
                    <>
                      <input
                        type="text"
                        value={editedPostTitle}
                        onChange={(e) => setEditedPostTitle(e.target.value)}
                      />
                      <textarea
                        value={editedPostContent}
                        onChange={(e) => setEditedPostContent(e.target.value)}
                      />
                      <button
                        className="edit-btn"
                        onClick={() => handleEditPost(post.id)}
                      >
                        Spara <FaSave />
                      </button>
                      <button className="edit-btn" onClick={handleCancelEdit}>
                        Avbryt <FaTimes />{" "}
                      </button>
                      <button
                        className="edit-btn"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        Radera <FaTrash />
                      </button>
                    </>
                  ) : (
                    <>
                      <h3>
                        {post.title}{" "}
                        {post.email === auth.currentUser.email && (
                          <button
                            onClick={() => {
                              setEditMode(true);
                              setEditedPostId(post.id);
                              setEditedPostTitle(post.title);
                              setEditedPostContent(post.content);
                            }}
                          >
                            <FaPen />
                          </button>
                        )}
                      </h3>
                      <p>{post.content}</p>
                      <p>
                        Puss & Kram, <br /> {post.name}{" "}
                        <img style={{ height: "1.2rem" }} src={Jelly} alt="" />{" "}
                        <br />
                        {post.timeStamp}
                      </p>
                    </>
                  )}
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
