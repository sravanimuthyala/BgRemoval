import React, { createContext, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  const { getToken } = useAuth();

  const [credit, setCredit] = useState(0);
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState("");

  // Load user's credits
  const loadCreditsData = async () => {
    try {
      const token = await getToken();

      if (!token) return;

      const { data } = await axios.get(
        backendurl + "/api/user/credits",
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        setCredit(data.credit);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Remove image background
  const removeBg = async (file) => {
    try {
      if (!file) return;

      setImage(file);
      setResultImage("");

      const token = await getToken();

      if (!token) {
        toast.error("Please login first");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      const { data } = await axios.post(
        backendurl + "/api/image/remove-bg",
        formData,
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        setResultImage(data.resultImage);
        await loadCreditsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    backendurl,
    credit,
    setCredit,
    image,
    setImage,
    resultImage,
    setResultImage,
    loadCreditsData,
    removeBg,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
