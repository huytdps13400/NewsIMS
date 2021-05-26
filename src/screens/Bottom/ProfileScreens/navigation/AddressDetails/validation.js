import {object, string} from 'yup';

export default object().shape({
  full_name: string().required('tên không để trống'),
  phone: string().required('điện thoại không được để trống'),
  email: string().required('không được để trống').email('sai định dạng'),
  address: string().required('không được để trống'),
  province: object().required('không được để trống'),
  district: object().required('không được để trống'),
  ward: object().required('không được để trống'),
});
