import axios from "axios";
import { create } from "zustand";

const API_LOGIN = "http://139.5.146.186/api/auth/login";
const userSlice = (set) => ({
  authUser: null,

  login: async (input) => {
    const res = await axios.post(API_LOGIN, input);
    console.log("res.data-----", res.data);

    localStorage.setItem("userId", res.data.user.userId);

    set({ authUser: res.data });
  },

  logout: () => {
    localStorage.clear();
    set({ authUser: null });
  },
});

const userStore = create(userSlice);
export default userStore;
