import "./App.css";
import Notification from "./Notification";
import data from "./data.json";

function AppContainer() {
  return (
    <div className=" mt-10 mx-16 px-4 pb-6 bg-white flex flex-col max-h-min rounded-md ">
      <div className="flex justify-between mx-3 my-6">
        <div className="flex items-center">
          <p className="font-extrabold text-xl">Notifications</p>
          <div className=" inline-flex ml-2 pl-2 rounded-md bgcolor-blue w-6 h-5 text-white font-bold text-sm">
            3
          </div>
        </div>

        <div className="textcolor text-xs self-end">Mark all as read</div>
      </div>

      <div className="flex flex-col gap-1">
        {data.map((data) => (
          <Notification
            key={data.idkey}
            notification={data}
          />
        ))}
      </div>
    </div>
  );
}

export default AppContainer;
