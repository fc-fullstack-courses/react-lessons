import React from 'react';
import { getUsers } from '../../api';
import DataLoader from '../../components/DataLoader';

function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  );
}

const PostsPage = () => {
  const renderPosts = (loaderState) => {
    return (
      <ul>
        <li>data: {JSON.stringify(loaderState.data)}</li>
        <li>isLoading: {loaderState.isLoading}</li>
        <li>error: {loaderState.error}</li>
      </ul>
    );
  };

  return (
    <main>
      <h1>Posts</h1>
      <DataLoader loadData={getPosts} render={renderPosts} />
      {/* <DataLoader loadData={() => getUsers({ page: 5 })} /> */}
    </main>
  );
};

export default PostsPage;
