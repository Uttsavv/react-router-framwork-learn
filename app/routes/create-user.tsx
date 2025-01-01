import { useFetcher } from "react-router";

export async function action() {}

export default function CreateUser() {
    const fetcher = useFetcher();
    return (
        <div>
            <fetcher.Form>
                <label htmlFor="username" />
                <input type="text" id="username" />
            </fetcher.Form>
        </div>
    );
}
