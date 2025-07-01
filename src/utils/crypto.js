import CryptoJS from 'crypto-js';

const SECRET_KEY = 'magic-conch-key';

export function encryptData(obj) {
  try {
    const json = JSON.stringify(obj);
    const encrypted = CryptoJS.AES.encrypt(json, SECRET_KEY).toString();
    return btoa(encrypted); // base64 인코딩
  } catch (e) {
    return null;
  }
}

export function decryptData(cipherText) {
  try {
    const decrypted = CryptoJS.AES.decrypt(atob(cipherText), SECRET_KEY);
    const json = decrypted.toString(CryptoJS.enc.Utf8);
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
} 