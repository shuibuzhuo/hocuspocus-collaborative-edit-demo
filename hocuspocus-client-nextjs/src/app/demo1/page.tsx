"use client";

import * as Y from "yjs";
import { TiptapCollabProvider } from "@hocuspocus/provider";
import Editor from "./Editor";
import "./style.css";

const appId = process.env.NEXT_PUBLIC_TIPTAP_APP_ID || "";
const token = process.env.NEXT_PUBLIC_TIPTAP_TOKEN || "";
console.log("appId...", appId);
console.log("token...", token);
const room = `room.${new Date().getFullYear().toString().slice(-2)}${
  new Date().getMonth() + 1
}${new Date().getDate()}`;

console.log("room...", room);

// ydoc and provider for Editor A
const ydocA = new Y.Doc();
const providerA = new TiptapCollabProvider({
  appId,
  name: room,
  document: ydocA,
  token,
});

// ydoc and provider for Editor B
const ydocB = new Y.Doc();
const providerB = new TiptapCollabProvider({
  appId,
  name: room,
  document: ydocB,
  token,
});

const App = () => {
  return (
    <div className="col-group">
      <Editor provider={providerA} ydoc={ydocA} room={room} />
      <Editor provider={providerB} ydoc={ydocB} room={room} />
    </div>
  );
};

export default App;
