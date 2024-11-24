export interface BasicRegistrationPayload {
    deviceId:    string;
    preferences: Preferences;
    latitude:    number;
    longitude:   number;
}

export interface Preferences {
    language:                           string;
    method_for_prayer_time_calculation: string;
}
