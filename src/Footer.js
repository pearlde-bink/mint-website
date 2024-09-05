import Facebook from "./assets/icons/fb.png";
import Instagram from "./assets/icons/ins.png";
import Reddit from "./assets/icons/reddit.png";

const Footer = () => {
  return (
    <div className="z-10 w-full flex flex-row justify-end items-center p-6 absolute bottom-0 right-0">
      <img
        alt="linkSocial"
        src={Facebook}
        className="w-10 h-auto shadow-lg ml-3"
      ></img>
      <img
        alt="linkSocial"
        src={Instagram}
        className="w-10 h-auto shadow-lg ml-3"
      ></img>
      <img
        alt="linkSocial"
        src={Reddit}
        className="w-10 h-auto shadow-lg ml-3"
      ></img>
    </div>
  );
};

export default Footer;
