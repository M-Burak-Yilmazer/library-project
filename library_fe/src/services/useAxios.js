import axios from "axios";

const useAxios = () => {
  const axiosPublic = axios.create({
    baseURL: "http://localhost:8000",
  });

  return { axiosPublic };
};

export default useAxios;
