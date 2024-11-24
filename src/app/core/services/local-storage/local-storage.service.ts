import { Injectable } from '@angular/core';
import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'aes' });

export const STORAGE_KEYS = {
  DEVICE_ID_KEY: 'deviceId',
  USER_BASIC_REGISTRATION_KEY: 'userBasicRegistrationData',
  USER_BASIC_AUTH_TOKEN_KEY: 'userBasicAuthToken',
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveToLocalStorage(key: string, data: any) {
    ls.set(key, data);
  }

  getFromLocalStorage(key: string) {
    return ls.get(key);
  }

  deleteKeyFromLocalStorage(key: string) {
    ls.remove(key);
  }

  cleanStorage() {
    ls.clear();
  }
}
