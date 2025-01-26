import { TweetPostProps } from "@/lib/types";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const TweetPost: React.FC<TweetPostProps> = ({
  profileImage,
  username,
  fullname,
  createdAt,
  content,
  contentImage,
  commentCount,
  like,
  likeCount,
  bookmark,
  repost,
  repostCount,
}) => {
  return (
    <div>
      <div className="max-w-[800px] flex flex-col border-t-[1px] border-gray-500 p-3">
        <div className="flex gap-3">
          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 object-cover rounded-full"
          ></img>
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <p className="font-bold hover:underline cursor-pointer">
                {fullname}
              </p>
              <p className="text-sm text-grey_disable">
                @{username} • {createdAt}
              </p>
            </div>
            <p> {content} </p>
            {contentImage && (
              <img
                src={contentImage}
                alt="Tweet"
                className="max-w-full w-fit rounded-xl mt-5 border-[1px] border-[#4c4f53]"
              />
            )}
            <div className="flex mt-2 items-center justify-between">
              <button className="flex gap-1 items-center text-grey_disable hover:text-blue_twitter hover:bg-blue_twitter/20 rounded-full py-2 px-3">
                <IoChatbubbleOutline />
                <p className="text-xs md:text-sm mt-[2px]">{commentCount}</p>
              </button>
              <button className="flex gap-1 items-center text-grey_disable hover:text-[#00b277] hover:bg-[#00b277]/20 rounded-full py-2 px-3">
                {repost ? (
                  <BiRepost className="text-xl text-[#00b277]" />
                ) : (
                  <BiRepost className="text-xl" />
                )}
                <p
                  className={`text-xs md:text-sm mt-[2px] ${
                    repost && "text-[#00b277]"
                  }`}
                >
                  {repostCount}
                </p>
              </button>
              <button className="flex gap-1 items-center text-grey_disable hover:text-[#e91778] hover:bg-[#e91778]/20 rounded-full py-2 px-3">
                {like ? (
                  <FaHeart className="text-sm text-[#e91778]" />
                ) : (
                  <FaRegHeart className="text-sm" />
                )}
                <p
                  className={`text-xs md:text-sm mt-[2px] ${
                    like && "text-[#e91778]"
                  }`}
                >
                  {likeCount}
                </p>
              </button>
              <button className="flex gap-1 items-center text-grey_disable hover:text-blue_twitter hover:bg-blue_twitter/20 rounded-full py-2 px-3 text-sm lg:text-base">
                {bookmark ? (
                  <FaBookmark className="text-blue_twitter" />
                ) : (
                  <FaRegBookmark />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetPost;
