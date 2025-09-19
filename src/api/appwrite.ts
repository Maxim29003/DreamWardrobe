import { Client, Databases, Account} from "appwrite";
import { ENDPOINT, PROJECT_ID } from "../../env";

const client: Client = new Client();

client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

