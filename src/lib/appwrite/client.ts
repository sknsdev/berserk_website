import { Account, Client } from 'appwrite';

const endpoint =
  process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? 'https://admin.fq3.ru/v1';
const projectId =
  process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? '66602f240028f4ac5b7c';

const client = new Client().setEndpoint(endpoint).setProject(projectId);

export const account = new Account(client);

export const appwriteConfig = {
  endpoint,
  projectId,
};
