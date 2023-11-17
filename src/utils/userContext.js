import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Default User",
  contact: "7300558002",
});
export default userContext;
