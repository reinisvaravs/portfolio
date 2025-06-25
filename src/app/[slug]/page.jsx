"use client";
import { useParams } from "next/navigation";
import Home from "../page";

export default function SlugPage() {
  return <Home slug={useParams().slug} />;
}
