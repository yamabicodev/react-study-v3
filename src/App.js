import "./styles.css";
import { useState, useCallback } from "react";
import { ChildArea } from "./components/ChildArea";

export default function App() {
  console.log("App is re-rendering!!");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  return (
    <div className="App">
      <input type="text" onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
