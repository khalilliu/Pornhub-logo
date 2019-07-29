import { createContext, useContext } from "react";
import { decorate, observable, action } from "mobx";

// export const StoreContext = createContext();

const DATAKEY = "store-data";

export class TextStore {
  data = {
    prefixText: "Pron",
    suffixText: "me",
    // not storage
    prefixColor: "#ffffff",
    suffixColor: "#000000",
    postfixBgColor: "#ff9900",
    transparentBg: false,
    reverseHighlight: false,
    fontSize: 55
  };

  setDataFromSessionStorage = data => {
    const dataStr = JSON.stringify(data);
    localStorage && localStorage.setItem(DATAKEY, dataStr);
  };

  getDataFromSessionStorage = () => {
    let data = localStorage.getItem(DATAKEY);
    if (data) {
      data = JSON.parse(data);
      this.data = { ...this.data, ...data };
    } else {
      data = { ...this.data, prefixText: "Pron", suffixText: "me" };
    }
    return data;
  };

  changeText = (value, type) => {
    this.data[type] = value;
    this.setDataFromSessionStorage({
      prefixText: this.data.prefixText,
      suffixText: this.data.prefixText
    });
  };

  handleStoreChange = (value, type) => {
    console.log("run this");
    this.data[type] = value;
  };
}

decorate(TextStore, {
  data: observable,
  getDataFromSessionStorage: action,
  setDataFromSessionStorage: action,
  handleStoreChange: action,
  changeText: action
});

const storeContext = createContext(new TextStore());

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("You have forgot to use StoreProvider, shame on you.");
  }
  return store;
};
