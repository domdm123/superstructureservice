import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { DOMAIN } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: `${DOMAIN}/services/new-bathroom-fitter-canterbury` },
};

export default function NewBathroomRedirectPage() {
  redirect("/services/new-bathroom-fitter-canterbury");
}
