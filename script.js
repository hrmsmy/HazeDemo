const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

const filters = document.querySelectorAll('.filter');
filters.forEach(filter => filter.addEventListener('click', () => {
  filters.forEach(button => button.classList.remove('active'));
  filter.classList.add('active');
  const selected = filter.dataset.filter;
  document.querySelectorAll('.product, .menu-group').forEach(product => {
    const visible = selected === 'all' || product.dataset.category === selected;
    product.style.display = visible ? '' : 'none';
  });
}));
