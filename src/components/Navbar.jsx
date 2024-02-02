import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Chat, Notification, UserProfile } from '.';
import SearchBar from './SearchBar.jsx';
import LiveClockUpdate from './LiveClockUpdate.jsx';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-5 m-2 bg-white hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
const NavButton1 = ({ title, customFunc, icon, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      className="relative text-xl rounded-full p-5 m-2 text-white bg-blue-500 hover:text-blue-500 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <div className="flex justify-between items-center gap-8">
        <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
        <SearchBar />
      </div>
      <LiveClockUpdate />
      <div className="flex items-center">
        <NavButton title="Chat" dotColor="#03C9D7" bg="slate-200" customFunc={() => handleClick('chat')} color={currentColor} className="bg-white" icon={<BsChatLeft />} />
        <NavButton1 title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-14 h-14"
              src={avatar}
              alt="user-profile"
            />
          </div>
        </TooltipComponent>

        {/* {isClicked.cart && (<Cart />)} */}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  );
};

export default Navbar;
