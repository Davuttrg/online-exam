import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ResolveTest from "../pages/ResolveTest";

const useRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <ResolveTest />,
        },
      ],
    },
  ]);

  return router;
};

export default useRouter;
