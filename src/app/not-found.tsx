"use client";
import MockText from "@/components/MockText";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const { push } = useRouter();
  setTimeout(() => push("/"), 2000);
  return <MockText page={"CUSTOM 404"} />;
}
