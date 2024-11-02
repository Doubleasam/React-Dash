import user from "../../assets/images/user.jpg";
const DepertmentActivites = () => {
  return (
    <div className="border shadow-md py-4">
      <h2 className="border-b pb-4 px-4 text-lg font-semibold text-[#262626]/70">
        Depertment Activity
      </h2>

      <div className="mt-4 px-4 flex items-center gap-2">
        <p className="w-[10px] h-[10px] bg-[#467FCF]"></p>
        <p className="text-[#262626]/60">Purchases</p>
      </div>

      <div className="mt-12">
        <div>
          <div className="grid lg:grid-cols-3 text-[#262626]/70 border-b px-4 pb-4">
            <p>USER</p>
            <p>COMMMIT</p>
            <p>DATE</p>
          </div>

          <div className="grid lg:grid-cols-3 px-4 border-b pb-4 mt-4">
            <div className="flex gap-4 items-center">
              <img className="w-[35px]" src={user} alt="" />
              <h2 className="font-semibold text-[#262626]/70">
                Ronald Bradley
              </h2>
            </div>

            <div className="flex gap-4 items-center font-semibold text-[#262626]/70">
              <h2>Inital commit</h2>
            </div>

            <div className="flex gap-4 items-center font-semibold text-[#262626]/70">
              <p>May 6,2018</p>
              <p>Delete</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 px-4 border-b pb-4 mt-4">
            <div className="flex gap-4 items-center">
              <img className="w-[35px]" src={user} alt="" />
              <h2 className="font-semibold text-[#262626]/70">
                Ronald Bradley
              </h2>
            </div>

            <div className="flex gap-4 items-center font-semibold text-[#262626]/70">
              <h2>Inital commit</h2>
            </div>

            <div className="flex gap-4 items-center font-semibold text-[#262626]/70">
              <p>May 6,2018</p>
              <p>Delete</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 px-4 border-b pb-4 mt-4">
            <div className="flex gap-4 items-center">
              <img className="w-[35px]" src={user} alt="" />
              <h2 className="font-semibold text-[#262626]/70">
                Ronald Bradley
              </h2>
            </div>

            <div className="flex gap-4 items-center font-semibold text-[#262626]/70">
              <h2>Inital commit</h2>
            </div>

            <div className="flex gap-4 items-center font-semibold text-[#262626]/70">
              <p>May 6,2018</p>
              <p>Delete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepertmentActivites;
