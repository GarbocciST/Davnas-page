import { Navigate, Route, Routes } from "react-router-dom"
import { DavnasPage } from "../davnas/pages/DavnasPage"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/home" element={<DavnasPage />} />

        <Route path="/*" element={ <Navigate to='/home' />} />
    </Routes>
  )
}
