import axios from "axios";
const API_URL ="https://jobseeker-1.onrender.com/api-v1";

export const API = axios.create({
    baseURL: API_URL,
    responseType: "json",
});

export const apiRequest = async({ url, token, data, method }) => {
  try {
      const result = await API(url, {
          method: method || "GET",
          data: data,
          headers: {
              "Content-Type": "application/json",
              Authorization: token ? `Bearer ${token}` : "",
          },
      });

      return result?.data;
  } catch (error) {
      // Enhanced error handling
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          const err = error.response.data;
          console.error('Error response:', err);
          return { status: err.success, message: err.message };
      } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
          return { status: false, message: 'No response from server' };
      } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up request:', error.message);
          return { status: false, message: 'Request setup error' };
      }
  }
};


export const handleFileUpload = async (uploadFile) => {
 const formData = new FormData();
 formData.append("file",uploadFile);
 formData.append("upload_preset", "JobSeeker");

try{
  const response = await axios.post(
    "https://api.cloudinary.com/v1_1/do2hrm3ku/image/upload/",
    formData
  );
  return response.data.secure_url;
} catch (error) {
      console.log(error);
}   
};


export const updateURL =({
  pageNum,
  query,
  cmpLoc,
  sort,
  navigate,
  location,
  jType,
  exp,
}) => {
  const params = new URLSearchParams();
  if (pageNum && pageNum > 1){
    params.set("page , pageNum");
  }

  if (query) {
    params.set("search", query);
  }

  if(cmpLoc) {
    params.set("location", cmpLoc);
  }

  if (sort) {
    params.set("sort",sort);
  }

  if (jType) {
    params.set("jtype",jType);
  }

  if (exp) {
    params.set("exp", exp);
  }

  const newURL = `${location.pathname}?${params.toString()}`;
  navigate(newURL, { replace: true});

  return newURL;
};