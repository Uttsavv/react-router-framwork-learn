import { redirect } from "react-router";
import { deleteContact } from "../data";
import type { Route } from "./+types/destroy-contact";

export async function action({ params }: Route.ActionArgs) {
    const { contactId } = params;
    await deleteContact(contactId);
    return redirect("/");
}
