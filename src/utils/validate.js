export const validateEmailAndPassword = (email, password) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!emailRegex.test(email)) {
    return "Invalid email address";
  } else if (!passwordRegex.test(password)) {
    return "Password is not valid";
  } else {
    return null;
  }
};
