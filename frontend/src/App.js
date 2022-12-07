import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Audit from "./pages/audit";
import Planning from "./pages/planning-screen";
import Configuration from "./pages/configuation-screen";
import { flexbox } from "@mui/system";
import { Box, IconButton, useTheme } from "@mui/material";
// import Team from "./pages/team";
// import Invoices from "./pages/invoices";
// import Contacts from "./pages/contacts";
// import Bar from "./pages/bar";
// import Form from "./pages/form";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from ".pages/faq";
// import Geography from "./pages/geography";
// import Calendar from "./pages/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />

          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/audit" element={<Audit />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/configuration" element={<Configuration />} />
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

/*
<>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

      {/* This is the alias of BrowserRouter i.e. Router }
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component}
          <Route exact path="/" element={<Home />} />

          {/* this route is for the audit component, to audit transacritps
           }
          <Route path="/audit" element={<Audit />} />

          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component}
          <Route path="/planning" element={<Planning />} />

          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component}
          <Route path="/configuration" element={<Configuration />} />

          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" }
        </Routes>
      </Router>
    </>
*/
