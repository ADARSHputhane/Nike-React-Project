import { Button } from "../components";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize  font-bold max-w-lg">
          We Provide you
          <br />
          <span className="text-coral-red ">Super</span>
          <span className="text-coral-red "> Qualify</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence is reflected in our products
        </p>
        <div className="mt-11 ">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="oject-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
