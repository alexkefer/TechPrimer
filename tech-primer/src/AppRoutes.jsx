import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import GeneralCourse from "./pages/GeneralCourse/GeneralCourse.jsx";
import Catalogue from "./pages/CataloguePage.jsx";
import VideoTutorial from "./pages/HowTo.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
// import TextBoxNavigator from "./components/TextboxNavigator.jsx";
import TextboxTestPage from "./pages/GeneralCourse/generalcourses/TextboxTestPage.jsx";
import HardwareCourse from "./pages/GeneralCourse/generalcourses/HardwareCourse.jsx";

const BrowserRouter = createBrowserRouter([
    { path: "/", element: <HomePage/> },
    { path: "/settings", element: <SettingsPage/> },
    { path: "/generalcourses", element: <GeneralCourse/> },
    { path: "/catalogue", element: <Catalogue/> },
    { path: "/howto", element: <VideoTutorial/> },
    { path: "/textbox", element: <TextboxTestPage/> },
    { path: "/hardware-course", element: <HardwareCourse/> },
    { path: "/*", element: <ErrorPage/>}
    ]);

function AppRoutes() {
    return (
        <RouterProvider router={BrowserRouter}>
            <BrowserRouter />
        </RouterProvider>
    );
}

export default AppRoutes;