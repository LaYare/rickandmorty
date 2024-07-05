import './ScrollToTopButton.styles.scss';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return <button className="scroll-to-top" onClick={scrollToTop}></button>;
};

export default ScrollToTopButton;
