function validateName(name: string): boolean {
  if (!name) return true;
  if (name.length > 60) return false;
  const regex = /^[\p{L}\s]+$/u;
  return regex.test(name);
}

function validateEmail(email: string): boolean {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}
function validatePhone(phone: string): boolean {
  const regex = /^\d{10,}$/;
  return regex.test(phone);
}

export { validateEmail, validateName, validatePhone };
