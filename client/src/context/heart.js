import React, { createContext, useContext} from 'react';
// Auth and token context 
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
// profile type user context
export const UserContext = createContext();
export const useUser = () => useContext(UserContext);
// profile type user context
// managment context
export const ManagmentContext = createContext();
export const useManagment = () => useContext(ManagmentContext);

export const UserInfoContext = createContext();
export const useUserInfo= () => useContext(UserInfoContext);
