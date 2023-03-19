export type TUserContext = {
  token: string;
  username: string;
};

export interface UserContextType {
  userLoggedIn: TUserContext | null;
  setUserLoggedIn: any;
}
