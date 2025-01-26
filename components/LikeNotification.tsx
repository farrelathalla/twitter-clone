import { LikeNotifProps } from "@/lib/types";
import { FaHeart } from "react-icons/fa";

const LikeNotification: React.FC<LikeNotifProps> = ({
  profileImage,
  fullname,
  content,
}) => {
  return (
    <div>
      <div className="max-w-[800px] flex flex-col border-t-[1px] border-gray-500 p-3">
        <div className="flex gap-5">
          <FaHeart className="text-[#e91778] text-2xl" />
          <div className="flex flex-col">
            <img
              src={profileImage}
              alt="Profile"
              className="w-9 h-9 object-cover rounded-full mb-2"
            ></img>
            <p className="font-bold">
              {fullname} <span className="font-normal">liked your post</span>
            </p>
            <p className="text-sm text-grey_disable mt-5">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeNotification;
