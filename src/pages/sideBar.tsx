import { Link } from "react-router-dom";
import { ReactElement } from "react";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineApi,
  AiOutlineSetting,
} from "react-icons/ai";
import classNames from "classnames";
import { FaHornbill } from "react-icons/fa";

export default function SideBar() {
  type navigationType = {
    classify: string;
    name: string;
    path: string;
    icon: ReactElement;
  };

  let navigationTop: navigationType[] = [
    {
      classify: "Dashboard",
      name: "Dashboard",
      path: "dashboard",
      icon: <AiOutlineHome size={20} />,
    },
    {
      classify: "Dashboard",
      name: "Event Checklist",
      path: "dashboard",
      icon: <AiOutlineHome size={20} />,
    },

    {
      classify: "RSVP",
      name: "Users",
      path: "usermanagement",
      icon: <AiOutlineTeam size={20} />,
    },
    {
      classify: "RSVP",
      name: "Custom RSVP",
      path: "custom",
      icon: <AiOutlineTeam size={20} />,
    },
  ];

  let navigationBottom: navigationType[] = [
    {
      classify: "Support",
      name: "Billing",
      path: "billing",
      icon: <FaHornbill size={20} />,
    },
    {
      classify: "Support",
      name: "Settings",
      path: "settings",
      icon: <AiOutlineSetting size={20} />,
    },
  ];

  const NavigationComponent = ({ classification, items }: any) => (
    <div className="flex flex-col justify-center">
      <div className="flex items-center justify-start mx-4 font-bold text-gray-600 h-8 uppercase text-[10px]">
        {classification}
      </div>
      {items.map((data: any) => (
        <Link
          key={data.name}
          to={data.path}
          className={classNames(
            "flex h-12 flex-row items-center justify-start py-2 group w-full"
          )}
        >
          <div className="px-4">{data.icon}</div>
          <div className="font-medium w-fit text-black whitespace-nowrap text-left text-sm group-hover:text-indigo-400">
            {data.name}
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="w-44 h-full   z-1 bg-slate-200 flex-col  ">
      <div className="flex items-center justify-center font-bold text-2xl pt-8 pb-8">
        <Link to="/" className="flex  justify-center  items-center rounded-md">
          Your <span className="text-yellow-500 ">D</span> &nbsp;
          <span className="text-lg">Anaylytic</span>
        </Link>
      </div>
      <div className="fixed z-50 flex flex-col justify-between pb-24 h-[calc(100vh-4rem)]">
        <div>
          {navigationTop.map((item) => (
            <NavigationComponent
              key={item.name}
              classification={item.classify}
              items={[item]}
            />
          ))}
        </div>
        <div>
          {navigationBottom.map((item) => (
            <NavigationComponent
              key={item.name}
              classification={item.classify}
              items={[item]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
