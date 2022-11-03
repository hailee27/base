import { lazy, Suspense } from "react";
import Backdrop from "@mui/material/Backdrop";

import CircularProgress from "@mui/material/CircularProgress";

const lazyLoading = (importFunc: any) => {
  const LazComponent = lazy(importFunc);
  return function (props: any) {
    return (
      <Suspense
        fallback={
          <Backdrop open={true}>
            <CircularProgress color="secondary" />
          </Backdrop>
        }
      >
        <LazComponent {...props} />
      </Suspense>
    );
  };
};

export default lazyLoading;
