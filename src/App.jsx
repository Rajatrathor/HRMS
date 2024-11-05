import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./PAGES/AppLayout";
import Dashboard from "./COMPONENTS/Dashboard";
import Companies from "./COMPONENTS/Companies";
import AddCompany from "./COMPONENTS/AddCompany";
import CompanyTable from "./COMPONENTS/CompanyTable";
import { createContext, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
export const CompanyContext = createContext();
function App() {
  const [companyData, setCompanyData] = useState([]);
  const [addCompany, setAddCompany] = useState({
    companyName: "",
    phone: "",
    address: "",
    country: "",
    name: "",
    email: "",
    password: "",
    currency: "",
  });
  return (
    <>
      <CompanyContext.Provider
        value={{
          companyData,
          setCompanyData,
          addCompany,
          setAddCompany,
        }}
      >
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate to="companies" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="companies" element={<Companies />}>
                <Route index element={<CompanyTable />} />
                <Route path="addcompany" element={<AddCompany />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </CompanyContext.Provider>
    </>
  );
}

export default App;
