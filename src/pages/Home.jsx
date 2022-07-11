import axios from 'axios';
import React, { useEffect} from 'react';
import { getComments } from '../apiServices/CommentApi';
import ApiHook from '../apiServices/hook/ApiHook';
import { getPosts } from '../apiServices/PostApi'

function Home(props) {
    
    const getPostsApi = ApiHook(getPosts);
    const getCommentsApi = ApiHook(getComments);
   
    useEffect(() => {
       getPostsApi.request();
       getCommentsApi.request();
      }, []);

    return (
        <div>
      <div>
        <h1>Posts</h1>
        {getPostsApi.loading && <p>Posts are loading!</p>}
        {getPostsApi.error && <p>{getPostsApi.error}</p>}
        <ul>
          {getPostsApi.data?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Comments</h1>
        {getCommentsApi.loading && <p>Comments are loading!</p>}
        {getCommentsApi.error && <p>{getCommentsApi.error}</p>}
        <ul>
          {getCommentsApi.data?.map((comment) => (
            <li key={comment.id}>{comment.name}</li>
          ))}
        </ul>
      </div>
    </div>
    );
}

export default Home;