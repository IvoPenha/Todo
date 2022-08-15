import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Task } from "./components/Card/task";
import { NotFound } from "./components/NotFound/NotFound";
import { Login } from "./pages/authpages/login";
import { Register } from "./pages/authpages/register";

export function Routs(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/register" element ={<Register/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/Task" element={<Task/>}></Route>
                <Route path ='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>



    )
}