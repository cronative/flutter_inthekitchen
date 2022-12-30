import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login = lazy(() => import("./components/views/login/login"));

export default function RouteConfig() {
    return (
      <>
        <BrowserRouter>

        </BrowserRouter>
      </>
    );
  }