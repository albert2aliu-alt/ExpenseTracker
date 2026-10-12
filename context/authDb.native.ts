/**
 * authDb.native.ts — SQLite implementation (iOS & Android)
 * Metro picks this file automatically on native platforms.
 *
 * Database file: auth.db (stored on device)
 * Tables:
 *   users    — registered accounts
 *   sessions — active login session
 */

import * as SQLite from "expo-sqlite";

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

// ── Singleton DB connection ───────────────────────────────────────────────────
let _db: SQLite.SQLiteDatabase | null = null;

async function getDb(): Promise<SQLite.SQLiteDatabase> {
  if (!_db) _db = await SQLite.openDatabaseAsync("auth.db");
  return _db;
}

// ── Schema bootstrap ─────────────────────────────────────────────────────────
export async function initDb(): Promise<void> {
  const db = await getDb();
  await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS users (
      id            TEXT PRIMARY KEY,
      username      TEXT NOT NULL UNIQUE COLLATE NOCASE,
      password_hash TEXT NOT NULL,
      created_at    TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sessions (
      id         INTEGER PRIMARY KEY,
      user_id    TEXT NOT NULL,
      username   TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
  `);
}

// ── Session ───────────────────────────────────────────────────────────────────
export async function getSession(): Promise<StoredSession | null> {
  const db = await getDb();
  return db.getFirstAsync<StoredSession>(
    "SELECT user_id, username, created_at FROM sessions LIMIT 1;",
  );
}

export async function saveSession(
  userId: string,
  username: string,
  createdAt: string,
): Promise<void> {
  const db = await getDb();
  await db.runAsync("DELETE FROM sessions;");
  await db.runAsync(
    "INSERT INTO sessions (user_id, username, created_at) VALUES (?, ?, ?);",
    [userId, username, createdAt],
  );
}

export async function clearSession(): Promise<void> {
  const db = await getDb();
  await db.runAsync("DELETE FROM sessions;");
}

// ── Users ─────────────────────────────────────────────────────────────────────
export async function findUserByUsername(
  username: string,
): Promise<StoredUser | null> {
  const db = await getDb();
  return db.getFirstAsync<StoredUser>(
    "SELECT id, username, password_hash, created_at FROM users WHERE username = ? COLLATE NOCASE;",
    [username],
  );
}

export async function insertUser(
  id: string,
  username: string,
  passwordHash: string,
  createdAt: string,
): Promise<void> {
  const db = await getDb();
  await db.runAsync(
    "INSERT INTO users (id, username, password_hash, created_at) VALUES (?, ?, ?, ?);",
    [id, username, passwordHash, createdAt],
  );
}
