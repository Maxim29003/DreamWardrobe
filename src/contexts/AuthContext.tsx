import React, { createContext, useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

type AuthContextType = {
  user: FirebaseAuthTypes.User | null;
  isEmailVerified: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isEmailVerified: false,
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const sub = auth().onIdTokenChanged(async u => {
      if (u) await u.reload();
      setUser(u);
      setIsEmailVerified(u?.emailVerified ?? false);
    });
    return sub;
  }, []);

  return (
    <AuthContext.Provider value={{ user, isEmailVerified }}>
      {children}
    </AuthContext.Provider>
  );
};
