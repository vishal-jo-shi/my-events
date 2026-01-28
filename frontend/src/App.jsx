import {Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Home from './pages/Home'
import NotFound from "./components/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EventDetails from "./components/EventDetails";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Events from "./pages/Events";
import BookingForm from "./components/BookingForm";
import Profile from "./pages/Profile";
import MyBookings from "./pages/MyBookings";
import DashboardLayout from "./pages/DashboardLayout";
import CreateEvent from "./pages/organizer/CreateEvent";
import MyEvents from "./pages/organizer/MyEvents";
import EventBookings from "./pages/organizer/EventBookings";
import AllEvents from "./pages/admin/AllEvents";
import AllUsers from "./pages/admin/AllUsers";
import AllBookings from "./pages/admin/AllBookings";

import { useDispatch ,useSelector} from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./features/auth/authThunks";
function App() {
      const dispatch = useDispatch();
      const {authChecked} = useSelector((s) => s.auth);
       useEffect(() => {
          if (!authChecked) dispatch(checkAuth());
        }, [authChecked]);

   if (!authChecked) return null; // or splash screen

  return (
    <>
        <Routes>
           {/* MAIN LAYOUT */}
        <Route element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/event/:eventId/book" element={<BookingForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* User */}
          <Route path="/my-profile/:userId" element={<Profile />} />
          <Route path="/my-booking" element={<MyBookings/>}/>
          
          {/* Organizer */}
          <Route path="/dashboard" element={<DashboardLayout role="organizer" />}>
            <Route index element={<CreateEvent />} />
            <Route path="my-events" element={<MyEvents />} />
            <Route path="event-bookings" element={<EventBookings />} />
          </Route>
        
        {/* Admin */}
          <Route path="/admin/dashboard" element={<DashboardLayout role="admin" />}>
            <Route index element={<AllEvents />} />
            <Route path="all-users" element={<AllUsers />} />
            <Route path="all-bookings" element={<AllBookings />} />
          </Route>
        </Route>
       

        {/* AUTH ROUTES*/}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App;
