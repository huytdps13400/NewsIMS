import TextInput from '@components/TextInput';
import {useField} from 'formik';
import React from 'react';

const FormInput = ({name, ...props}) => {
  const [field, meta, helpers] = useField({name: name});
  const isError = meta.touched && meta.error;

  return (
    <TextInput
      {...props}
      value={field.value}
      onChangeText={text => {
        helpers.setValue(text);
        props.onChangeText && props.onChangeText(text);
      }}
      isError={Boolean(isError)}
      errorText={props.errorText || meta.error}
    />
  );
};

export default FormInput;
