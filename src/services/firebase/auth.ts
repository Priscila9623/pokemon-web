import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';

import { auth } from './firebase';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider);
  return res.user;
};

export const signOut = () => firebaseSignOut(auth);

export default {
  signInWithGoogle,
  signOut,
};
