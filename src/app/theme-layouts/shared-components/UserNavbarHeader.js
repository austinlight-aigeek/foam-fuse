import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "app/store/userSlice";

const Root = styled("div")(({ theme }) => ({
  "& .username, & .email": {
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    position: "relative",
  },

  "& .username:hover, & .email:hover": {
    cursor: "pointer",
  },

  "& .username::after, & .email::after": {
    content: `""`,
    display: "block",
    width: 0,
    height: "2px",
    background: `${theme.palette.primary.main}`,
    position: "absolute",
    left: "50%",
    bottom: "-2px",
    transform: "translateX(-50%)",
    transition: "width 0.15s ease-in-out",
  },

  "& .username:hover::after, & .email:hover::after": {
    width: "100%",
  },

  "& .avatar": {
    background: theme.palette.background.default,
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    bottom: 0,
    "& > img": {
      borderRadius: "50%",
    },
  },
}));

function UserNavbarHeader(props) {
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  const openProfile = () => {
    navigate("/apps/profile");
  };

  const openMailbox = () => {
    navigate("/apps/mailbox/inbox");
  };

  return (
    <Root className="user relative flex flex-col items-center justify-center p-16 pb-14 shadow-0">
      <div className="flex items-center justify-center mb-24">
        <Avatar
          sx={{
            backgroundColor: "background.paper",
            color: "text.secondary",
          }}
          className="avatar text-32 font-bold w-96 h-96"
          src={user.data.photoURL}
          alt={user.data.displayName}
        >
          {user.data.displayName.charAt(0)}
        </Avatar>
      </div>
      <Typography
        className="username text-14 whitespace-nowrap font-medium"
        onClick={openProfile}
      >
        {user.data.displayName}
      </Typography>
      <Typography
        className="email text-13 whitespace-nowrap font-medium"
        sx={{ marginTop: "5px" }}
        onClick={openMailbox}
        color="text.secondary"
      >
        {user.data.email}
      </Typography>
    </Root>
  );
}

export default UserNavbarHeader;
