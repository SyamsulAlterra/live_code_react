import createStore from "unistore";

export const store = createStore({ object: "kotak hitam" });

export const actions = () => ({
  setObject(state, name) {
    return { object: name };
  }
});
