import { FunctionComponent, ButtonHTMLAttributes } from 'react';

const variants = {
  primary: 'primary',
  default: 'default',
};

const sizes = {
  large: 'large',
  small: 'small',
  default: 'default',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({
  type = 'button',
  variant = 'default',
  size = 'default',
  isLoading,
  ...props
}: ButtonProps) => {
  const className = ['button', variant, size, isLoading && 'is-loading'].filter(Boolean).join(' ');
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={className} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
