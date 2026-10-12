import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = '@expense_tracker_auth_users_v1';
const SESSION_KEY = '@expense_tracker_auth_session_v1';

export interface StoredSession {
  user_id: string;
  username: string;
  created_at: string;
}

export interface StoredUser {
  id: string;
  username: string;
  password_hash: string;
  created_at: string;
}

async function getUsers(): Promise<StoredUser[]> {
  const raw = await AsyncStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

async function saveUsers(users: StoredUser[]): Promise<void> {
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export async function initDb(): Promise<void> {
  const existing = await AsyncStorage.getItem(USERS_KEY);
  if (!existing) await saveUsers([]);
}

export async function getSession(): Promise<StoredSession | null> {
  const raw = await AsyncStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

export async function saveSession(userId: string, username: string, createdAt: string): Promise<void> {
  await AsyncStorage.setItem(SESSION_KEY, JSON.stringify({ user_id: userId, username, created_at: createdAt }));
}

export async function clearSession(): Promise<void> {
  await AsyncStorage.removeItem(SESSION_KEY);
}

export async function findUserByUsername(username: string): Promise<StoredUser | null> {
  const users = await getUsers();
  return users.find(user => user.username.toLowerCase() === username.toLowerCase()) ?? null;
}

export async function insertUser(
  id: string,
  username: string,
  passwordHash: string,
  createdAt: string
): Promise<void> {
  const users = await getUsers();
  if (users.some(user => user.username.toLowerCase() === username.toLowerCase())) {
    throw new Error('Username already exists');
  }
  await saveUsers([...users, { id, username, password_hash: passwordHash, created_at: createdAt }]);
}
