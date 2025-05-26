//Hacemos un botón para eliminar publicaciones
import axios from "axios";
import { API_BASE_URL } from "../utils/config.ts";

type DeleteButtonProps ={
  postId: string;
}

const DeleteButton = ({ postId }: DeleteButtonProps) => {

  const handleDelete = async () => {
    const confirmDelete = confirm("te arrepientes o sigues adelante?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_BASE_URL}api/posts/${postId}`);
      
      // Recargar la página directamente
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    } catch (err) {
      console.error("Error al eliminar el post:", err);
      alert("No se pudo eliminar el post");
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="delete-button"
      aria-label="Eliminar publicación"
    >
      <span className="icon">🗑️</span>
    </button>
  );
};

export default DeleteButton;
