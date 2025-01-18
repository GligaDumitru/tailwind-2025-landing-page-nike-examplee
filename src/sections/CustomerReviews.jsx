import CustomerReviewCard from "../components/CustomerReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl capitalize font-bold max-lg:max-w-lg m-auto">
        What Our{" "}
        <span className="text-coral-red inline-block mt-3">Customers</span> Say?
      </h3>
      <p className="mt-4 max-w-lg info-text text-center m-auto">
        Discover stylish Nike arrivals, quality comfort, and innovation for your
        active life.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <CustomerReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
