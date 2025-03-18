import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { About } from "./pages/about/About.tsx";
import { Competences } from "./pages/competences/Competences.tsx";
import { HomePageV2 } from "./pages/home/HomePageV2.tsx";
import { MentionsLegales } from "./pages/legal/MentionsLegales.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("L'élément #root est introuvable");

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePageV2 />} />
					<Route path="/about" element={<About />} />
					<Route path="/competences" element={<Competences />} />
					<Route path="/mentions" element={<MentionsLegales />} />
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>,
);
