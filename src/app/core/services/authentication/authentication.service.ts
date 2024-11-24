import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BasicRegistrationPayload,
  Preferences,
} from '@app/core/models/user.model';
import { lastValueFrom, Observable, of, switchMap, tap } from 'rxjs';
import { GeolocationService } from '../geolocation/geolocation.service';
import {
  LocalStorageService,
  STORAGE_KEYS,
} from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseAuthServiceUrl = 'http://13.60.18.137/api';
  private createUserUrl = `${this.baseAuthServiceUrl}/user/create`;
  private tokenUserUrl = `${this.baseAuthServiceUrl}/auth/token`;
  constructor(
    private http: HttpClient,
    private localisationService: GeolocationService,
    private localStorageService: LocalStorageService
  ) {}

  registerBasicUser() {
    const payload: BasicRegistrationPayload = {} as BasicRegistrationPayload;
    payload.deviceId = this.getDeviceId();
    payload.preferences = {} as Preferences;
    payload.preferences.language = 'en'; // TODO: get language from user's device settings or browser settings
    payload.preferences.method_for_prayer_time_calculation = 'MWL'; // TODO: get prayer time calculation method from user's device settings or browser settings
    console.log('payload', payload);
    const userBasicRegistration = this.localStorageService.getFromLocalStorage(
      STORAGE_KEYS.USER_BASIC_REGISTRATION_KEY
    );
    if (userBasicRegistration) {
      return of(userBasicRegistration);
    } else {
      return this.localisationService.getCurrentPosition().pipe(
        switchMap((postion) => {
          payload.latitude = postion.coords.latitude;
          payload.longitude = postion.coords.longitude;
          return this.http.post<any>(this.createUserUrl, payload).pipe(
            tap((res) => {
              this.localStorageService.saveToLocalStorage(
                STORAGE_KEYS.USER_BASIC_REGISTRATION_KEY,
                res
              );
            })
          );
        })
      );
    }
  }

  getBasicUserToken(deviceId: string) {
    const httpParams = new HttpParams().set('userId', deviceId);
    return this.http.get<any>(`${this.tokenUserUrl}`, { params: httpParams }).pipe(
      tap((res) => {
        this.localStorageService.saveToLocalStorage(STORAGE_KEYS.USER_BASIC_AUTH_TOKEN_KEY, res);
      })
    );
  }

  private generateDeviceId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  getDeviceId(): string {
    let deviceId = this.localStorageService.getFromLocalStorage(
      STORAGE_KEYS.DEVICE_ID_KEY
    );
    if (!deviceId) {
      deviceId = this.generateDeviceId();
      this.localStorageService.saveToLocalStorage(
        STORAGE_KEYS.DEVICE_ID_KEY,
        deviceId
      );
    }

    console.log('deviceId', deviceId);

    return deviceId;
  }
}
