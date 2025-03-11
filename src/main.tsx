import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App.tsx";
import { HomePage } from "./pages/home/HomePage.tsx";
import "./index.css";
import { About } from "./pages/about/About.tsx";
import { MentionsLegales } from "./pages/legal/MentionsLegales.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("L'élément #root est introuvable");

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePage />} />
					<Route path="/about" element={<About />} />
					<Route path="/mentions-legales" element={<MentionsLegales />} />
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>,
);
