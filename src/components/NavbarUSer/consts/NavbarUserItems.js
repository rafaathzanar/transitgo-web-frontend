import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { AccessTime } from "@mui/icons-material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { LogoutOutlined } from "@mui/icons-material";
import { Home } from "@mui/icons-material";

export const NavbarUserItems = [
  {
    id: 0,
    icon: <AccountCircle />,
    label: "Profile",
    route: "/profile",
  },
  {
    id: 2,
    icon: <AccessTime />,
    label: "Activity History",
    route: "/activityhistory",
  },
  {
    id: 3,
    icon: <LocalShippingIcon />,
    label: "Package Status",
    route: "",
  },
  {
    id: 4,
    icon: <Home />,
    label: "Home",
    route: "/",
  },
  {
    id: 5,
    icon: <LogoutOutlined />,
    label: "Log Out",
    route: "/",
  },
];
