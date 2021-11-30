// eslint-disable-next-line import/prefer-default-export
export const randomlyPickCssClass = (
  cssClasses = ['style1', 'style2', 'style3', 'style4', 'style5', 'style6'],
): string => {
  const randomIndex = Math.floor(Math.random() * cssClasses.length);
  return cssClasses[randomIndex];
};
