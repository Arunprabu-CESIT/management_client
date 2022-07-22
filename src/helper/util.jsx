export const Validate = (values, pageName) => {
  const errors = {};
  const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

  if (pageName === 'login') {
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Enter a valid Email!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    }
  } else if (pageName === 'register') {
    if (!values.firstName) {
      errors.firstName = 'First Name is required!';
    }
    if (!values.lastName) {
      errors.lastName = 'Last Name is required!';
    }
    if (!values.role) {
      errors.role = 'Role is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Enter a valid Email!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 6) {
      errors.password = 'Password must have 6 charecters';
    } else if (values.password.length >= 12) {
      errors.password = 'Password limit is 12 charecters';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Re-enter Password';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = `Password doesn't match!`;
    }
  } else if (pageName === 'employeeData') {
    if (!values.name) {
      errors.name = 'Required!';
    }
    if (!values.employeeId) {
      errors.employeeId = 'Required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Enter a valid Email!';
    }
    if (!values.mobile) {
      errors.mobile = 'Required!';
    }
    if (!values.designation) {
      errors.designation = 'Required!';
    }
    if (!values.address) {
      errors.address = 'Required!';
    }
  }

  return errors;
};
