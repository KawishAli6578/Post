
const { randomBytes } = require("crypto");
const postModal = require("../modal/postModal");
exports.getAllPost = async (req, res) => {
  try {
    const posts=await postModal.find()
    console.log(posts,"posts")
    res.send(posts);
  } catch (err) {
    console.log(err);
    res.json({ message: "failed" });
  }
};
// exports.createNewPost = async (req, res) => {
//   try {
//       const id = randomBytes(4).toString("hex");
//       console.log(req.body, "req.body");
//       const { title } = req.body;
//       posts[id] = [id, title];
//       console.log(posts[id],"posts[id]")
//       console.log(posts,"posts")
    //   const postsCreate = {
    //     '4a937d26': ['4a937d26', 'sds'],
    //     '25e9dcaf': ['25e9dcaf', 'scs'],
    //     '02449451': ['02449451', 'scsc'],
    //     '06c741c9': ['06c741c9', 'adsc'],
    //   };
//     const postCreate =await postModal.create(postsCreate)

//     console.log(postCreate, "postCreate");
//     res.status(201).send(postsCreate);6
//   } catch (err) {
//     console.log(err);
//     res.json({ message: "failed" });
//   }
// };
exports.createNewPost = async (req, res) => {
    try {
        const posts = {};
        const id = randomBytes(4).toString("hex");
        const { title } = req.body;
        posts[id] = [id, title]; 
      // Create an array to store the created posts
      const createdPosts = [];
  
      // Loop through each key-value pair in the posts object
      for (const [postId, postValues] of Object.entries(posts)) {
        // Create a new instance of the post model
        const post = new postModal({
          _id: postId,
          title: postValues,
        });
        // Save the post to the database
        const createdPost = await post.save();
        createdPosts.push(createdPost);
      }
  
      console.log(createdPosts, "createdPosts");
      res.status(201).send(createdPosts);
    } catch (err) {
      console.log(err);
      res.json({ message: "failed" });
    }
  };