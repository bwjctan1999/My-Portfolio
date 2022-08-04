import avatar from "../assets/images/avatar.jpg";

export default function AboutMe() {
  return (
    <div className="w-screen h-screen bg-black p-32">
      <div className="flex justify-center items-center gap-28 w-full">
        <div className="w-1/3 text-white">
          <img src={avatar} className="brightness-75" />
        </div>
        <div className="text-base text-sky-600 text-justify w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
        </div>
      </div>
    </div>
  );
}
