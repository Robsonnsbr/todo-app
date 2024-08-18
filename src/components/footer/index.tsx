import React, { HTMLAttributes } from 'react';
import ContainerMedium from '../common/container/ContainerMedium';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer = ({ ...rest }: FooterProps) => {
  return (
    <footer {...rest} className="global-height-footer  text-black">
      <hr className={`border  border-mediumGray`} />
      <section className="global-section pb-8">
        <ContainerMedium id="container-bottom-footer">
          <p className="m-auto w-fit text-center font-inter  text-deepGray bg-transparent text-xs">
            ©Copyright <strong>Robson Monteiro</strong>. Todos direitos
            reservados.
          </p>
        </ContainerMedium>
      </section>
    </footer>
  );
};

export default Footer;
