const posts = async (_, __, { getPosts }) => {
  const users = await getPosts();
  return users.json();
};

const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();
  return post;
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
