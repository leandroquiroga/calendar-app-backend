import { Environment } from "../interfaces";

export const environment: Environment = {
  PORT: process.env.PORT || '8000',
  DB_URI: process.env.DB_URI || '',
  SECRET_JWT_SEED: process.env.SECRET_JWT_SEED || '',
}