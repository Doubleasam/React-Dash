import Depertment from "../Depertment/Depertment";
import Navbar from "../Navbar/Navbar";

const DashboardCard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:px-20 md:px-16 px-12 py-4">
        <h2 className="text-2xl font-semibold text-[#262626]/70 mt-4">
          Dashboard
        </h2>

        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-8">
          <div className="border rounded shadow-md flex items-center justify-center text-center flex-col relative py-8">
            <p className="right-4 top-4 absolute text-[#8ECF4D] font-medium">
              <span>+6%</span>
              <span></span>
            </p>
            <div>
              <h2 className="text-2xl font-semibold text-[#262626]/80">43</h2>
              <p className="font-medium text-[#262626]/60">New Tickets</p>
            </div>
          </div>

          <div className="border rounded shadow-md flex items-center justify-center text-center flex-col relative py-8">
            <p className="right-4 top-4 absolute text-[red] font-medium">
              <span>-3%</span>
              <span></span>
            </p>
            <div>
              <h2 className="text-2xl font-semibold text-[#262626]/80">17</h2>
              <p className="font-medium text-[#262626]/60">Closes Today</p>
            </div>
          </div>

          <div className="border rounded shadow-md flex items-center justify-center text-center flex-col relative py-8">
            <p className="right-4 top-4 absolute text-[#8ECF4D] font-medium">
              <span>+9%</span>
              <span></span>
            </p>
            <div>
              <h2 className="text-2xl font-semibold text-[#262626]/80">7</h2>
              <p className="font-medium text-[#262626]/60">New Replies</p>
            </div>
          </div>

          <div className="border rounded shadow-md flex items-center justify-center text-center flex-col relative py-8">
            <p className="right-4 top-4 absolute text-[#8ECF4D] font-medium">
              <span>+3%</span>
              <span></span>
            </p>
            <div>
              <h2 className="text-2xl font-semibold text-[#262626]/80">
                27.3K
              </h2>
              <p className="font-medium text-[#262626]/60">Followers</p>
            </div>
          </div>

          <div className="border rounded shadow-md flex items-center justify-center text-center flex-col relative py-8">
            <p className="right-4 top-4 absolute text-[red] font-medium">
              <span>-2%</span>
              <span></span>
            </p>
            <div>
              <h2 className="text-2xl font-semibold text-[#262626]/80">$95</h2>
              <p className="font-medium text-[#262626]/60">Daily Earming</p>
            </div>
          </div>

          <div className="border rounded shadow-md flex items-center justify-center text-center flex-col relative py-8">
            <p className="right-4 top-4 absolute text-[red] font-medium">
              <span>-1%</span>
              <span></span>
            </p>
            <div>
              <h2 className="text-2xl font-semibold text-[#262626]/80">621</h2>
              <p className="font-medium text-[#262626]/60">Products</p>
            </div>
          </div>
        </div>

        <div>
          <Depertment></Depertment>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
