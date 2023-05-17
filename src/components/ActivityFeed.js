import React from "react";

const ActivityFeed = () => {
  return (
    <div>
      <div className="flex justify-center h-screen w-screen bg-[#EEF0F4]">
        <div className="w-2/4  flex flex-col justify-start p-10 ">
          <div className="my-4 flex justify-between">
            <h1 className="text-lg font-bold">Today</h1>
            <div className="button">
              <button className="bg-white hover:bg-slate-600 text-black font-bold py-2 px-4 rounded">
                Filter
              </button>
            </div>
          </div>

          <div className="activity_item flex justify-between w-full">
            <div className="time">
              <p className="text-xs text-slate-500">10:00</p>
            </div>
            <div className="icon">
              <img
                src="https://img.icons8.com/ios/50/000000/checked-2--v1.png"
                alt="icon"
                className="w-8 h-8 bg-white rounded-full p-1"
              />
            </div>
            <div className="w-4/5 bg-white  rounded-md">
              <div className="activity-card  flex h-16 ">
                <div className="profile-image">
                  <img
                    src="https://img.icons8.com/ios/50/000000/checked-2--v1.png"
                    alt="icon"
                    className="w-8 h-8 bg-white rounded-full p-1"
                  />
                </div>
                <div className="content">
                  <p className="text-sm font-bold">John Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
