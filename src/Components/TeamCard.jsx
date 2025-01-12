import PropTypes from "prop-types";

function TeamCard() {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-2">
      <div>
        <div className="text-2xl text-[#0F1629] font-semibold">Team</div>
        <div className="text-[#3E424A] text-[16px] font-medium my-4 pt-2">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </div>
        <div>
          <Card
            name="John Smith"
            des="Designation here"
            link="https://www.genevant.com/wp-content/uploads/2020/08/Chomitz0519_JCP8665preliminary.jpg"
            />
          <Card
            name="Elina Williams"
            des="Designation here"
            link="https://www.genevant.com/wp-content/uploads/2020/08/Chomitz0519_JCP8665preliminary.jpg"
            />
          <Card
            name="John Smith"
            des="Designation here"
            link="https://www.genevant.com/wp-content/uploads/2020/08/Chomitz0519_JCP8665preliminary.jpg"          
            />
        </div>
      </div>
    </div>
  );
}

function Card({ name, link, des }) {
  return (
    <div className="md:flex bg-[#E8F4FD] rounded-lg py-4 md:px-8 my-6">
      <div className="justify-center flex flex-col items-center">
        <div>
          <img className="rounded-xl w-44 lg:w-96" src={link} alt={name} />
        </div>
        <div className="text-[#0F1629] text-[15px] font-semibold py-1">{name}</div>
        <div className="text-[#788F9B] text-xs font-medium">{des}</div>
      </div>
      <div className="flex justify-center items-center px-4 ml-4 text-[#0F1629] text-sm font-normal">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </div>
    </div>
  );
}

// PropTypes for the Card component
Card.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};

export default TeamCard;
