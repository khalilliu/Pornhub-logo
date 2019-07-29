import { createContext } from "react";
import { decorate, observable, action } from "mobx";

export const StoreContext = createContext();

export class TextStore {
  data = { prefixText: "Pron", suffixText: "me", direction: "column" };

  changeText(value, type) {
    this.data[type] = value;
  }
  changeDirection(value) {
    this.data.direction = value;
  }
}

decorate(TextStore, {
  data: observable,
  changeText: action
});
