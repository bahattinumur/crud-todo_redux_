import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { ActionTypes } from "../redux/actionTypes/actionTypes";

import axios from "axios";

const AddForm = () => {
  const dispatch = useDispatch(); // Dispatch aktiflestir

  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfa yenilemesini engelle

    const newTodo = {
      // Store gidecek yeni veriyi hazırla
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      create_at: new Date().toLocaleDateString(),
    };

    // Veriyi api ya eklemek göndermek
    axios.post("/todos", newTodo).then(() =>
      dispatch({
        // Reducer'a aksiyonun iletilmesi
        type: ActionTypes.ADD,
        payload: newTodo,
      })
    );

    e.target.reset(); //formu temizleme
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        placeholder="Add a Note here..."
        type="text"
      />

      <button className="btn btn-warning">ADD</button>
    </form>
  );
};

export default AddForm;
