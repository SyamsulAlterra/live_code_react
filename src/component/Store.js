import createStore from "unistore";

export const store = createStore({
  status: false,
  username: "",
  password: "",
  email: "",
  category: "",
  listMovie: []
});

export const actions = () => ({
  toggleStatus(state, bool) {
    return { status: bool };
  },
  setUsername(state, name) {
    return { username: name };
  },
  setPassword(state, pass) {
    return { password: pass };
  },
  setEmail(state, em) {
    return { email: em };
  },
  setCategory(state, cate) {
    return { category: cate };
  },
  setMovie(state, list) {
    return { listMovie: list };
  }
});
