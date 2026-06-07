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

// Ministry sub-pages
import Men from "./pages/ministries/Men";
import Women from "./pages/ministries/Women";
import Youth from "./pages/ministries/Youth";
import Children from "./pages/ministries/Children";
import Worship from "./pages/ministries/Worship";
import Outreach from "./pages/ministries/Outreach";

export default function App() {
  return (
    <HelmetProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="ministries" element={<Ministries />} />
            <Route path="ministries/men" element={<Men />} />
            <Route path="ministries/women" element={<Women />} />
            <Route path="ministries/youth" element={<Youth />} />
            <Route path="ministries/children" element={<Children />} />
            <Route path="ministries/worship" element={<Worship />} />
            <Route path="ministries/outreach" element={<Outreach />} />
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
