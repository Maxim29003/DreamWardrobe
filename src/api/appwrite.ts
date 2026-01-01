import { Client, Databases, Account } from 'appwrite';
import Config from 'react-native-config';

const client: Client = new Client();

client.setEndpoint(Config.ENDPOINT).setProject(Config.PROJECT_ID);

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

