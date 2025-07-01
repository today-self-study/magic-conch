import CryptoJS from 'crypto-js';
import LZString from 'lz-string';

const SECRET_KEY = 'magic-conch-key';

function toBase64Url(str) {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function fromBase64Url(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  return atob(str);
}

export function encryptData(obj) {
  try {
    const json = JSON.stringify(obj);
    const compressed = LZString.compressToEncodedURIComponent(json);
    const encrypted = CryptoJS.AES.encrypt(compressed, SECRET_KEY).toString();
    return toBase64Url(encrypted);
  } catch (e) {
    return null;
  }
}

export function decryptData(cipherText) {
  try {
    const encrypted = fromBase64Url(cipherText);
    const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    const compressed = decrypted.toString(CryptoJS.enc.Utf8);
    const json = LZString.decompressFromEncodedURIComponent(compressed);
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
} 