import Card from "../utils/Card";

import { members } from "../assets/data/data.js";

const Team = () => {
  return (
    <section className="team pb-10">
      <div className="wrapper mx-auto max-w-[75rem]">
        <div className="text-content text-center py-[72px] px-4">
          <h2 className="text-[24px] sm:text-[48px] font-bold ">
            Meet The Team
          </h2>
          <p className="text-[16px] leading-relaxed mt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <p className="img-credit mt-[20px] ">
            Image by <span className="underline font-semibold">Freepik</span>
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 grid gap-3 grid-cols-1 sm:grid-cols-2 ">
        {members?.map((person) => (
          <Card
            key={person.id}
            image={person.imageUrl}
            description={person.description}
            name={person.name}
            jobRole={person.jobRole}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
