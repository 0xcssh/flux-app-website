import { redirect } from "next/navigation";
import { LEGAL_URL } from "@/lib/constants";

export default function Terms() {
  redirect(`${LEGAL_URL}/terms`);
}
