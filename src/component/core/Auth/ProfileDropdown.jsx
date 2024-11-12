import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { logout } from "../../../services/operations/authAPI1";

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  if (!user) return null;

  return (
    <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
        <div className="flex flex-col items-center pt-2">
          <img
            src={user?.photo_url}
            alt={`${user?.name}`}
            className="aspect-square w-[40px] rounded-full object-cover "
          />
          <p>{user?.accountType}</p>
          <div className="flex items-center gap-1 font-semibold text-blue-950 text-sm ml-2"><p>{user?.accountType}</p><AiOutlineCaretDown className="text-sm text-blue-950" /></div>
        </div>
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[130%] right-0 z-[1000] w-72 divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-blue-950"
          ref={ref}
        >
          <Link to="/dashboard/profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center h-12 gap-x-1 py-[10px] px-[12px] text-sm  hover:bg-richblack-700 hover:text-gray-300 text-white  font-semibold">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate));
              setOpen(false);
            }}
            className="flex w-full items-center gap-x-1 h-12 py-[10px] px-[12px] text-sm text-white  font-semibold hover:bg-richblack-700 hover:text-gray-300"
          >
            <VscSignOut className="text-lg" />
            Sign Out
          </div>
        </div>
      )}
    </button>
  );
}
