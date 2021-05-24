import {object, ref, string} from 'yup';

const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

export const signUpValidate = object().shape({
  full_name: string().required('Tên không được để trống'),
  password: string()
    .min(6, 'password phải có 6 kí tự')
    .required('password không được để trống'),
  rePassword: string()
    .min(6)
    .required('rePassword phải có 6 kí tự')
    .oneOf([ref('password'), null], 'rePassword không giống Password'),
  email: string()
    .email('email không đúng định dạng')
    .required('email không được để trống'),
  phone: string()
    .matches(phoneRegex, 'Số điện thoại không đúng định dạng')
    .required('Số điện thoại không được để trống'),
});
