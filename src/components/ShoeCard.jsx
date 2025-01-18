/* eslint-disable react/prop-types */

const ShoeCard = ({ imgURl, bigShoeImage, changeBigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURl.bigShoe) {
      changeBigShoeImage(imgURl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
      onMouseOver={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
