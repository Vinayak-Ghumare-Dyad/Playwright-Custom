import 'dotenv/config'; // loads .env into process.env

/** Reads a required environment variable or fails fast with a clear message. */
export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name} (set it in .env)`);
  }
  return value;
}

export const credentials = {
  get username(): string {
    return requireEnv('APP_USERNAME');
  },
  get password(): string {
    return requireEnv('APP_PASSWORD');
  },
};
