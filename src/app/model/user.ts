import {Role} from "./role";

export interface User {
  id: number;
  username: string;
  password: string;
  confirmPassword: string;
  enabled: boolean;
  roles: [Role];
}
