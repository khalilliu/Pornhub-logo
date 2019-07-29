import { createContext, useContext } from "react";
import { decorate, observable, action, toJS } from "mobx";

// export const StoreContext = createContext();

const DATAKEY = "store-data";

export class TextStore {
  text = {
    prefixText: "Edit",
    suffixText: "me"
  };
  data = {
    // not storage
    prefixColor: "#ffffff",
    suffixColor: "#000000",
    postfixBgColor: "#ff9900",
    transparentBg: false,
    reverseHighlight: false,
    fontSize: 55
  };

  setDataFromSessionStorage = data => {
    // console.log(data, "data");
    const dataStr = JSON.stringify(data, null, 2);
    localStorage && localStorage.setItem(DATAKEY, dataStr);
  };

  getText = () => {
    let text = localStorage.getItem(DATAKEY);
    if (text) {
      text = JSON.parse(text);
      Object.keys(text).map(type => (this.text[type] = text[type]));
      console.log(toJS(this.text), "only");
      return text;
    }
    return toJS(this.text);
  };

  changeText = (value, type) => {
    this.text[type] = value;
    console.log(toJS(this.text), "1");
    this.setDataFromSessionStorage({
      prefixText: this.text.prefixText,
      suffixText: this.text.suffixText
    });
  };

  handleStoreChange = (value, type) => {
    this.data[type] = value;
  };
}

decorate(TextStore, {
  text: observable,
  data: observable,
  getText: action,
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
