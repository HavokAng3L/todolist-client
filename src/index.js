import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/main.css";

const rootEl = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootEl);

const queryClient = new QueryClient();

reactRoot.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
