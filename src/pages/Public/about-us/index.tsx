import { NavBar } from 'components';
import Heading from 'components/Heading';
import { Footer } from 'containers';
import React from 'react';

interface IProps {}

const AboutUs: React.FC<IProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <NavBar variant="black" />
        <Heading title={'About Us'} className="text-center mb-5" />
        <p className="f-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          soluta? Quas, impedit rem qui consectetur atque optio eveniet, soluta
          ab maiores cum et saepe totam fuga amet aspernatur quis similique
          voluptatibus voluptatum ipsa magni. Architecto blanditiis accusantium
          laborum. Vero excepturi totam voluptas dolorum ipsam dolores,
          dignissimos tenetur quod libero amet quam! Accusantium magnam eos,
          ipsum aut cupiditate quas neque, consectetur reprehenderit quos
          dolorem enim excepturi amet voluptatibus blanditiis eligendi illo
          voluptatum, et impedit? Sunt dolorum temporibus recusandae modi
          asperiores corporis! Cumque, dolorum culpa. Corrupti magnam
          blanditiis, eveniet incidunt at ducimus iusto explicabo qui ipsam
          suscipit tempora quo, minus soluta impedit similique doloribus dolorum
          optio. Voluptatem quo magni dolores distinctio dolorum, earum id
          similique dicta eligendi porro adipisci veniam deleniti iusto animi
          aperiam necessitatibus molestiae corporis tenetur. Pariatur ipsum
          architecto accusamus debitis, sequi dolorum alias saepe ex provident
          velit? Ea doloribus error dicta culpa commodi ab accusantium repellat
          quos totam ullam consequuntur labore nam quis repellendus
          exercitationem aliquam at, magnam odit repudiandae? Soluta cupiditate
          error rerum nulla consequuntur exercitationem odit deleniti,
          distinctio architecto est sed quas nesciunt asperiores veritatis
          voluptas? Nostrum incidunt autem quam laboriosam blanditiis nam porro,
          error saepe eos veniam ad nesciunt dolores qui! Deleniti dolores modi
          ipsa possimus.
        </p>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(AboutUs);
