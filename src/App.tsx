/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Admin from "./pages/Admin";
import Give from "./pages/Give";
import Ministries from "./pages/Ministries";
import JoinUs from "./pages/JoinUs";
import Prayer from "./pages/Prayer";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="ministries" element={<Ministries />} />
            <Route path="sermons" element={<Sermons />} />
            <Route path="admin" element={<Admin />} />
            <Route path="give" element={<Give />} />
            <Route path="join-us" element={<JoinUs />} />
            <Route path="prayer" element={<Prayer />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
