export function login({ email, password }, setBtnInLogin) {
  setBtnInLogin(true)
  const delay = (0.7 + Math.random() * 2) * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (password === 'password123' && !!email) {
        resolve();
        setBtnInLogin(false)
      } else {
        reject({ message: 'e-mail or password wrong.' });
        setBtnInLogin(false)
      }
    }, delay);
  });
}