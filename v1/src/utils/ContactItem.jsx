/* eslint-disable react/prop-types */
const ContactItem = ({ children, title, description, className }) => {
  return (
    <div
      className={`${className} wrapper px-[0.625rem] py-[1.25rem] md:text-left`}
    >
      <div className="icon-heading flex flex-col items-center md:flex-row gap-3 ">
        <div className="mt-[20px]">{children}</div>
        <h3 className="text-[20px] font-bold mt-[20px]">{title}</h3>
      </div>
      <p className="text-[16px] mt-[20px]">{description}</p>
    </div>
  );
};

export default ContactItem;
