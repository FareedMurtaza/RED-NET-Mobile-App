export const LOGIN = 'LOGIN';

export const login = (phoneno, password) => {
  return { type: LOGIN, phoneno: phoneno, password: password };
};