import './App.css';
import React from 'react';
import axios from 'axios';


function App() {

  const [posts, setPosts] = React.useState([]);
  const [abc, setAbc] = React.useState(true);


  function reload(){
    setPosts([]);
    setAbc( !abc )
  }

  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children.map(eachItem => eachItem.data);
        setPosts(newPosts);
      });

  }, [abc]);


  return (
    <div className="App">
      <h1>Use Effect</h1>

      <ul>
        {posts.map(post => (

          <li key={post.id}>
            <span style={{ fontWeight: "bold" }}>{post.id}: </span>   {post.title}
          </li>
        ))}
      </ul>

      <button onClick={ reload } > Reload </button>
    </div>
  );
}

export default App;
