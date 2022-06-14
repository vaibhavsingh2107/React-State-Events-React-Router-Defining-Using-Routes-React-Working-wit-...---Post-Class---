import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

export const AppRoutes = () => {
    return (
    <Routes>
    <Route path="/" element={<Index />}>
    <Route path="home" element={<Home />} />
    <Route
      path="*"
      element={<p>Not found page</p>}
    />
  </Route>
</Routes>
    )
}
export {BrowserRouter, Routes, Route};