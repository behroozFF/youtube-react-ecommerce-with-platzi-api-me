import { useEffect } from "react";
import { getCookie } from "../utils/helpers/cookie";
import useStore from "../store";
import { ToastContainer } from "react-toastify";
import PropTypes from 'prop-types';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

const Authorize = ({ children }) => {
  // destructure بکن ست استیت دیستراکچر از هوک یوس استور
  const { setState } = useStore();

  useEffect(() => {
    const readCookie = async () => {
      // setCookie("credential",{
      // access_token:"ytfguhljhohoho",
      // refresh_token:"trdfgkhljkyty"});

      const result = await getCookie("credential");
      setState(result);
      console.log(result);
    };

    readCookie();
  }, []);

  return <>{children}</>;
};

Authorize.propTypes = {
  children: PropTypes.node.isRequired,
};

// children یعنی هرجیزی که بینش قرار بگیره و پاس داده بشه
const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
    <Authorize>
      {children}
      <ToastContainer />
    </Authorize>
    </QueryClientProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
