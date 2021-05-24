import {object, string} from 'yup';

export const loginValidate = object().shape({
  username: string().required('Tên đăng nhập không được để trống'),
  password: string().required('Mật khẩu không được để trống'),
});
