import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-sm:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-coral-red inline-block mt-3">Super</span>{" "}
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life. Dive into the world of #tailwindcss, build a Nike
          #website, and join top-tier organizations like OpenAI, Shopify, and
          NASA in building stunning apps effortlessly.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="Shoe8"
          width={570}
          height={572}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
