import React from "react";
import useStore from "../../../store";
const Header = () => {
  const { access_token } = useStore();
  return (
    <header className="px-4 my-4">
      <div className="flex justify-between items-center bg-slate-700 p-4 text-slate-50 rounded-xl shadow-md">
        <p className="capitalize">
          <span>react ecommerce Behrouz</span>
        </p>
        <button>
          {access_token != null && access_token != undefined ? (
            <span>dashboard</span>
          ) : (
            <span>login/signup</span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
