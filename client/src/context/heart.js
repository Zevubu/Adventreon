import React, { createContext, useContext} from 'react';
// Auth and token context 
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// profile type user context
export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

// profile type Host context
export const HostContext = createContext();
export const useHost = () => useContext(HostContext);

// managment context
export const ManagmentContext = createContext();
export const useManagment = () => useContext(ManagmentContext);

// user info context
export const UserInfoContext = createContext();
export const useUserInfo= () => useContext(UserInfoContext);
