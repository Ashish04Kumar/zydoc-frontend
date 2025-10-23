import { specialityData } from "@/assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-[#262626]"
    >
      <h1 className="text-4xl font-semibold">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-[14px] font-medium">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex flex-wrap justify-center md:justify-evenly gap-4 pt-5 w-full ">
        {specialityData.map((item, idx) => {
          return (
            <Link
              onClick={() => scrollTo(0, 0)}
              to={`/doctor/${item.speciality}`}
              key={idx}
              className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="w-16 sm:w-24 mb-2 " src={item.image} />
              <p className="text-[14px] font-normal">{item.speciality}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialityMenu;
