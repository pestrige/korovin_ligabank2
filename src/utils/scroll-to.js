export const scrollTo = (id) => {
  document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
};
