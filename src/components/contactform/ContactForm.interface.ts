export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormProps = {
  onSubmit: (values: ContactFormValues) => void;
};
