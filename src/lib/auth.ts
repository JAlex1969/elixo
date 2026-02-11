import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.ENCRYPTION_KEY || 'my-secret-key-123';

/**
 * Encrypts a password using AES encryption.
 * @param password The plain text password.
 * @returns The encrypted password string.
 */
export const encryptPassword = (password: string): string => {
    return CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
};

/**
 * Decrypts an encrypted password using AES decryption.
 * @param encryptedPassword The encrypted password string.
 * @returns The decrypted plain text password.
 */
export const decryptPassword = (encryptedPassword: string): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};

/**
 * Validates a password by decrypting the stored password and comparing it.
 * Note: In a real production app, we would hash passwords and compare hashes.
 * This implementation follows the specific project requirement for "Encryption".
 */
export const validatePassword = (inputPassword: string, storedEncryptedPassword: string): boolean => {
    const decrypted = decryptPassword(storedEncryptedPassword);
    return inputPassword === decrypted;
};
