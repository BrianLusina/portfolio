import { FunctionComponent, ButtonHTMLAttributes } from 'react';

type variants = {
  primary: 'primary',
  default: 'default',
};

type sizes = {
  large: 'large',
  small: 'small',
  default: 'default',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof variants;
  size?: keyof sizes;
  isLoading?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({
  type = 'button',
  variant = 'default',
  size = 'default',
  isLoading,
  ...props
}: ButtonProps) => {
  const className = ['rn-button-style--2 btn-solid', variant, size, isLoading && 'is-loading'].filter(Boolean).join(' ');
  return (
    <button type={type} className={className} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
