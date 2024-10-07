export interface LoginAuthPayload {
  username: string;
  password: string;
}

export interface LoginAuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}
