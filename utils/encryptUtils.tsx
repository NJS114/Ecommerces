import CryptoJS from "crypto-js";

export interface EncryptedPayload {
  encryptedData: string;
  iv: string;
}

// Ensure the encryption key is a valid string
const encryptionKey = process.env.ENCRYPT_KEY;
if (!encryptionKey || typeof encryptionKey !== 'string') {
  throw new Error('ENCRYPT_KEY is not set or is invalid.');
}

// Function to ensure the key has the correct length
const getCorrectKeySize = (key: string): CryptoJS.lib.WordArray => {
  const keyLength = 32; // AES-256 requires 32 bytes (256 bits)

  // If the key is too short, pad it with spaces or truncate it as necessary
  const keyUtf8 = CryptoJS.enc.Utf8.parse(key);
  const keyPadded = CryptoJS.lib.WordArray.create(keyUtf8.words.slice(0, keyLength)); // Ensure the key is of the correct size

  return keyPadded;
};

/**
 * Generic function to encrypt payloads
 * @param data - The object to encrypt
 * @returns An object containing the encrypted data and IV
 */
// Function to encrypt payloads
export const encryptPayload = <T extends Record<string, unknown>>(data: T): EncryptedPayload => {
  const stringifiedData = JSON.stringify(data);
  const iv = CryptoJS.lib.WordArray.random(16); // Generate a random IV

  const encrypted = CryptoJS.AES.encrypt(stringifiedData, getCorrectKeySize(encryptionKey), {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return {
    encryptedData: encrypted.toString(),
    iv: iv.toString(CryptoJS.enc.Hex), // Return IV as hex for server-side use
  };
};

// Function to decrypt payloads
export const decryptPayload = <T extends Record<string, unknown>>(
  encryptedPayload: string,
  iv: string
): T => {
  const bytes = CryptoJS.AES.decrypt(encryptedPayload, CryptoJS.enc.Utf8.parse(encryptionKey), {
    iv: CryptoJS.enc.Hex.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  // Parse and return the decrypted JSON object
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

  if (!decryptedData) {
    throw new Error("Decryption failed or payload is empty.");
  }

  return JSON.parse(decryptedData) as T;
};
