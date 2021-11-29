export type MenuItem = {
  /**
   * Link to the page
   */
  link: string;
  /**
   * Title of the page
   */
  label: string;
  /**
   * whether the link is an external link or internal link.
   * if isExternal is true, then it will render with <a> tag
   * if isExternal is false, then it will render with <Link> tag
   */
  isExternal?: boolean;
};

export type MenuProps = {
  items?: MenuItem[];
};
