export default ({
  email: {
    presence: true,
    email: true,
  },
  password: { presence: true },
  passwordRepeat: {
    presence: true,
    equality: 'password',
  },
});
