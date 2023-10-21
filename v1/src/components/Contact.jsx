import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { Ri24HoursFill } from "react-icons/ri";
import ContactItem from "../utils/ContactItem";

const Contact = () => {
  return (
    <section className="contact py-20">
      <div className="wrapper mx-auto max-w-[75rem] md:flex">
        <div className="col w-[100%] text-center  px-[10px] py-[30px] md:px-[3rem] md:py-[5rem]  bg-gradient-to-t from-[#f1c50e] to-[#c947b4] text-white">
          <ContactItem
            title={"Call Us"}
            description={`1 (234) 567-891, 1 (234) 987-654`}
          >
            <BsTelephone className="text-[20px]" />
          </ContactItem>
          <ContactItem
            title={"Location"}
            description={`121 Rock Sreet, 21 Avenue, New York, NY 92103-9000`}
          >
            <IoLocationOutline className="text-[20px]" />
          </ContactItem>
          <ContactItem
            title={"Business Hours"}
            description={`Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed`}
          >
            <Ri24HoursFill className="text-[20px]" />
          </ContactItem>
        </div>
        <div className="col w-[100%] py-10 px-4 flex items-center">
          <div className="w-[100%]">
            <h3 className="text-[36px]  md:text-[48px] text-center py-4 mb-3 font-bold text-[#343333]">
              Contact Us
            </h3>
            <form className="form-group grid">
              <input
                className="border-b-2 py-[10px] px-[12px] outline-none"
                type="text"
                placeholder="Enter Your Name"
              />
              <input
                className="border-b-2 py-[10px] px-[12px] outline-none "
                type="text"
                placeholder="Enter Your Email"
              />
              <textarea
                className="border-b-2"
                name=""
                id=""
                cols="30"
                rows="5"
              />
              <button className=" outline-none border-none py-[10px] px-[30px] bg-[#C947B4] hover:bg-[#8d3a7f] font-bold uppercase text-white mt-[10px]">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
