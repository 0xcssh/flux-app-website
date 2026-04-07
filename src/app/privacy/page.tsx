import { redirect } from "next/navigation";
import { LEGAL_URL } from "@/lib/constants";

export default function Privacy() {
  redirect(`${LEGAL_URL}/privacy`);
}
