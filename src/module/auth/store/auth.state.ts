import { User } from '../../../interface/user.interface';

export interface AuthState {
  user: User | null;
}

export const initialState: AuthState = {
  user: null,
};
