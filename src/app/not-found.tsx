"use client";
import MaintenanceDiv from "@/components/MaintenanceDiv";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const { push } = useRouter();
  setTimeout(() => push("/"), 2000);
  return <MaintenanceDiv page={"CUSTOM 404"} />;
}
