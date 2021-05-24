import {object, ref, string} from 'yup';

const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

export const signUpValidate = object().shape({
  full_name: string().required('Tên không được để trống'),
  password: string()
    .min(6, 'Mật khẩu phải có 6 kí tự')
    .required('Mật khẩu không được để trống'),
  rePassword: string()
    .min(6)
    .required('Mật khẩu phải có 6 kí tự')
    .oneOf([ref('password'), null], 'Mật khẩu không giống nhau'),
  email: string()
    .email('Email không đúng định dạng')
    .required('Email không được để trống'),
  phone: string()
    .matches(phoneRegex, 'Số điện thoại không đúng định dạng')
    .required('Số điện thoại không được để trống'),
});
