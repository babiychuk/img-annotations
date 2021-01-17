import axios from "axios";

const serverURL = "http://localhost:8080";

const api = {
  server: {
    connect: () => axios.get(`${serverURL}/wake-up`),
  },
  image: {
    upload: (data) => axios.post(`${serverURL}/image-upload`, data),
  },
};

export default api;
