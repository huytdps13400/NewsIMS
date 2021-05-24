import {object, string} from 'yup';
export const validation = object().shape({
  emailOrPhone: string()
    .email('Email không đúng định dạng')
    .required('Email không được để trống'),
});
