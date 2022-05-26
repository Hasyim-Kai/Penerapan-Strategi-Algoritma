import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Auth from "./pages/Auth";
import FindNumberSteps from "./pages/FindNumberSteps";
import Fibonacci from "./pages/Fibonacci";
import NotFound from "./pages/NotFound";
import MoneyReturn from "./pages/MoneyReturn";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";

export default function AppRoutes() {
   return <BrowserRouter>
      <div className="flex min-h-screen">
         <Sidebar />
         <main className={`grow`}>
            <Routes>
               <Route index element={<LoginPage />} />
               <Route path='find-number' element={<FindNumberSteps />} />
               <Route path='fibonacci' element={<Fibonacci />} />
               <Route path='money-return' element={<MoneyReturn />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </main>
      </div>
   </BrowserRouter >
}