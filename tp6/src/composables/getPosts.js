let posts = [
    { id: 1, title: 'Post 1', body: 'This is the body of post 1', tags: ['vue', 'javascript'] },
    { id: 2, title: 'Post 2', body: 'This is the body of post 2', tags: ['html', 'css'] },
    { id: 3, title: 'Post 3', body: 'This is the body of post 3', tags: ['javascript', 'react'] },
  ];
  
  export async function getPosts() {
    return posts;
  }
  
  export async function getPost(id) {
    return posts.find(post => post.id === parseInt(id));
  }
  
  export async function updatePost(updatedPost) {
    const index = posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      posts[index] = updatedPost;
    }
  }
  
  export async function deletePost(id) {
    posts = posts.filter(post => post.id !== parseInt(id));
  }