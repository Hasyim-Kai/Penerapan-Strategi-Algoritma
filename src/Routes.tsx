import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import FindNumberSteps from "./pages/FindNumberSteps";
import Fibonacci from "./pages/Fibonacci";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
   return <BrowserRouter >
      <Routes>
         <Route index element={<Auth />} />
         <Route path='home' element={<Home />} />
         <Route path='find-number' element={<FindNumberSteps />} />
         <Route path='fibonacci' element={<Fibonacci />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
   </BrowserRouter >
}