import React from "react";
import { Link } from "react-router-dom";

export default function Home()
{
  return (
    <>
    <h1>Hello this is home</h1>
    <Link to="/register">Go To Register Page</Link>    
    </>
  )
}