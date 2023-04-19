export interface Environment {
  PORT: string;
  DB_URI: string;
  SECRET_JWT_SEED: string;
}

export interface UserModels {
  name: string;
  email: string;
  password: string;
}

export interface EventModels {
  title: string,
  notes: string,
  start: Date,
  end:  Date,
  user: string,
}

export interface JWTPayload {
  uid: string;
  name: string;
}

