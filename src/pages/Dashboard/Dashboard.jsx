import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { data, useNavigate } from "react-router-dom";

import useStore from "../../store";
import { Link } from "react-router-dom";
import getUserInfoWithTokenApi from "../../utils/apis/users/getUserInfoWithTokenApi";
import { useQuery } from "@tanstack/react-query";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DashboardSkeleton from "../../components/skeleton/DashboardSkeleton";
import ErrorOnFetchApi from "../../components/commen/ErrorOnFetchApi/ErrorOnFetchApi.jsx";
import { removeCookie } from "../../utils/helpers/cookie.js";
import LogoutIcon from '@mui/icons-material/Logout';
import Header from "../../components/commen/Header";

const Dashboard = () => {
  const { access_token, removeState } = useStore();
  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ["userIno"],
    queryFn: () => getUserInfoWithTokenApi(),
    enabled: access_token != null && access_token != undefined,
  });

 const handleLogout = () => {
  removeCookie("credential");
  removeState();
  toast.warn("Logout successfully, redirecting to login page ...");
  setTimeout(() => 
    navigate("/login"), 1000);
 }

  console.log(access_token);
  console.log(data);
  return <div>
    <Header/>
        {access_token != null && access_token != undefined ? (
        <>
          {/* <p>content</p> */}
          {isPending && <DashboardSkeleton />}

          {error && <ErrorOnFetchApi message={error?.message} />}
          {
            data && (
            <>
              <ListItem alignItems="flex-start">
                <div className="w-[10rem] pe-4">
                  <img className="rounded-full border-6" alt="profile image" 
                  src={data?.data?.avatar}
                  />
                  
                </div>
                <ListItemText
                  primary={
                    <div className="font-bold">
                      {`welcome , ${data?.data?.email}!`}
                    </div>
                  }
                  secondary={
                    <div className="flex flex-col gap-8 mt-4">
                      <div>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "text.primary", display: "inline" }}
                        >
                          Name &nbsp; : &nbsp;
                        </Typography>
                        {`  ` + data?.data?.name}
                      </div>
                      <div>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "text.primary", display: "inline" }}
                        >
                          Role &nbsp; : &nbsp;
                        </Typography>
                        {` ` + data?.data?.role}
                      </div>
                      <div>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "text.primary", display: "inline" }}
                        >
                          Password &nbsp; : &nbsp;
                        </Typography>
                        {` ` + data?.data?.password}
                      </div>
                      <div>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "text.primary", display: "inline" }}
                        >
                          Creation`` &nbsp; : &nbsp;
                        </Typography>
                        {` ` + data?.data?.creationAt
                        }
                      </div>
                    </div>
                  }
                />
              </ListItem>
              <button onClick={handleLogout} className="bg-red-500 txt-slate-50  my-3 mx-8 rounded-md p-4 ms-4 flex items-center gap-2">
              <span>Logout</span>
              <LogoutIcon />
            </button>
            </>
            )
            /*<p>content</p> */
          }
        </>
      ) : (
        <Link className="underline flex items-center justify-center" to="/login">
          <p className="
          bg-slate-500
           px-4 py-2 
           capitalize
         text-slate-50 
           rounded-md
           my-16
           text-4xl">only logged in users can access dashboard/profile</p>
        </Link>
      )}
  </div>;
};

export default Dashboard;
