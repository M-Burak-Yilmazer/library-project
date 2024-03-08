import { fetchFail, fetchStart, getBookSuccess } from "../features/bookSlice";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";

const useBookCalls = () => {
  const { axiosPublic } = useAxios();
  const dispatch = useDispatch();

  const getBooks = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic();
      //   console.log(data.result)
      dispatch(getBookSuccess(data.result));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const createBook = async (book) => {
    dispatch(fetchStart());
    try {
      await axiosPublic.post("/", book);
      getBooks();
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const updateBook = async (book) => {
    dispatch(fetchStart());
    try {
      await axiosPublic.put(`/${book.id}`, book);

      getBooks();
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const deleteBook = async (id) => {
    dispatch(fetchStart());
    try {
      await axiosPublic.delete(`/${id}`);
      alert("book deleted");
      getBooks();
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getBooks, createBook, updateBook, deleteBook };
};
export default useBookCalls;
