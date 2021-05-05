const API_TOKEN = 'apiToken';

export function setAuthToken(apiToken) {
  localStorage.setItem(API_TOKEN, apiToken);
}

export function getAuthToken() {
  return localStorage.getItem(API_TOKEN);
}

export function clearAuthToken() {
  localStorage.removeItem(API_TOKEN);
}
