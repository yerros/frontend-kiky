import axios from "axios";

//export const BaseUrl = "https://backend-airbnp.herokuapp.com/";
export const BaseUrl = "http://localhost:5000/";

export const Post = (path, body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(BaseUrl + path, body)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const Get = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .get(BaseUrl + path)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const Delete = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(BaseUrl + path)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const Put = (path, body) => {
  return new Promise((resolve, reject) => {
    axios
      .put(BaseUrl + path, body)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
