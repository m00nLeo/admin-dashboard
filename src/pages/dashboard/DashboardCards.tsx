import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaRegCalendarCheck,
} from "react-icons/fa";

const DashboardCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mb-4">
      {/* Facebook Card */}
      <div className="bg-white rounded-xl shadow">
        <div className="bg-[#367fbb] px-4 py-8 flex justify-center items-center relative rounded-t-xl ">
          <FaFacebookF size={60} />
        </div>
        <div className="flex justify-center text-center p-4">
          <div className="flex-1">
            <div className="text-lg font-semibold">89K</div>
            <div className="uppercase text-gray-500 text-sm">friends</div>
          </div>
          <div className="border-l border-gray-300 mx-2"></div>
          <div className="flex-1">
            <div className="text-lg font-semibold">459</div>
            <div className="uppercase text-gray-500 text-sm">feeds</div>
          </div>
        </div>
      </div>

      {/* Twitter Card */}
      <div className="bg-white rounded-xl shadow">
        <div className="bg-[#00aced] px-4 py-8 flex justify-center items-center relative rounded-t-xl">
          <FaTwitter size={60} />
        </div>
        <div className="flex justify-center text-center p-4">
          <div className="flex-1">
            <div className="text-lg font-semibold">973k</div>
            <div className="uppercase text-gray-500 text-sm">followers</div>
          </div>
          <div className="border-l border-gray-300 mx-2"></div>
          <div className="flex-1">
            <div className="text-lg font-semibold">1.792</div>
            <div className="uppercase text-gray-500 text-sm">tweets</div>
          </div>
        </div>
      </div>

      {/* LinkedIn Card */}
      <div className="bg-white rounded-xl shadow">
        <div className="bg-[#40679e] px-4 py-8 flex justify-center items-center relative rounded-t-xl">
          <FaLinkedin size={60} />
        </div>
        <div className="flex justify-center text-center p-4">
          <div className="flex-1">
            <div className="text-lg font-semibold">500</div>
            <div className="uppercase text-gray-500 text-sm">contacts</div>
          </div>
          <div className="border-l border-gray-300 mx-2"></div>
          <div className="flex-1">
            <div className="text-lg font-semibold">1.292</div>
            <div className="uppercase text-gray-500 text-sm">feeds</div>
          </div>
        </div>
      </div>

      {/* Events Card */}
      <div className="bg-white rounded-xl shadow">
        <div className="bg-yellow-400 px-4 py-8 flex justify-center items-center relative rounded-t-xl">
          <FaRegCalendarCheck size={60} />
        </div>
        <div className="flex justify-center text-center p-4">
          <div className="flex-1">
            <div className="text-lg font-semibold">6</div>
            <div className="uppercase text-gray-500 text-sm">upcoming</div>
          </div>
          <div className="border-l border-gray-300 mx-2"></div>
          <div className="flex-1">
            <div className="text-lg font-semibold">2</div>
            <div className="uppercase text-gray-500 text-sm">missed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
