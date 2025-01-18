import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life. Dive into the world of #tailwindcss, build a Nike
          #website.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort and join top-tier
          organizations like OpenAI, Shopify, and NASA in building stunning apps
          effortlessly.
        </p>
        <div className="mt-11 flex gap-5">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" variant="outline" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
