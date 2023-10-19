const Hero = () => {
  return (
    <section className="hero bg-gradient-to-b from-[#f1c50e] to-[#c947b4]">
      <div className="wrapper mx-auto max-w-[75rem]   py-[5rem] px-4 text-center">
        <h1
          className="
      text-[30px]
      lg:text-[72px]
      sm:text-[48px]
      lg:w-[90%]
      leading-none
    text-white
      font-bold
      mx-auto 
      m-[30px] "
        >
          We power innovation because we are innovators
        </h1>
        <div className="form-group flex flex-col md:flex-row justify-center gap-2 md:gap-0  ">
          <input
            type="email"
            className="py-[10px] px-[12px] border-none outline-none"
            placeholder="Your Email"
          />
          <button className="text-[20px] py-[10px] px-[30px] bg-[#f1c50e] text-[#000] uppercase font-semibold">
            contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
