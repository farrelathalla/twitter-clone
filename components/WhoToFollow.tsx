import { WhoToFollowProps } from "@/lib/types";

const WhoToFollow: React.FC<WhoToFollowProps> = ({
  image,
  username,
  fullname,
  followStatus,
}) => {
  return (
    <div>
      <div className="mt-5 grid grid-cols-[10%_70%_20%] gap-3 items-center  ">
        <img
          src={image}
          alt="Profile"
          className="w-9 h-9 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <p className="font-bold"> {fullname} </p>
          <p className="font-light text-grey_disable text-sm"> @{username} </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            className={`rounded-full font-bold text-xs px-5 py-2 ${
              followStatus
                ? "bg-blue_twitter text-white"
                : "bg-white text-black"
            }`}
          >
            {followStatus ? "Followed" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoToFollow;
