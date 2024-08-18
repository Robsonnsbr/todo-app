'use client';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import { useScrollToTop } from 'src/hooks';

function ScrollUpButton() {
  const { isVisible } = useScrollToTop();

  return (
    <button
      className={`fixed bottom-0 right-0 z-50 m-3 ${isVisible ? 'opacity-1' : 'opacity-0'} transition-all ease-linear duration-200`}
      id="button-scroll-up"
      title="UP"
    >
      <Link to="top-main" href="inicio-da-pagina" smooth={true} duration={500}>
        <div>
          <FaArrowUp className="size-7 fill-deepGray" />
        </div>
      </Link>
    </button>
  );
}

export default ScrollUpButton;
