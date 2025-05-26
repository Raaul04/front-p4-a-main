import Comment from "./comments.ts";

//he cho un cambio en el nombre de la propiedad comentarios a comments para que coincida con el modelo de la API
interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  cover: string;
  likes: number;
  createdAt: string;  
  comments: Comment[];
}

export default Post;
