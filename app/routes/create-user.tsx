import { useFetcher } from "react-router";
import type { Route } from "./+types/create-users";

export async function action({request}: Route.LoaderArgs) {
    const formData = 
}

export default function CreateUser() {
    const fetcher = useFetcher();
    return (
        <div>
            <fetcher.Form method="POST">
                <div>
                    <label htmlFor="name" />
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="age" />
                    <input type="number" id="age" name="age" />
                </div>
                <div>
                    <label htmlFor="email" />
                    <input type="text" id="email" name="email" />
                </div>
            </fetcher.Form>
        </div>
    );
}
