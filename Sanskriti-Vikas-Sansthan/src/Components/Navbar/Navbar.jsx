import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/footer-logo.png";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem } from "@mui/material";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const drawerWidth = 280;

const navItems = [
  {
    items: "Home",
    path: "/",
  },
  {
    items: "Products",
    path: "/products",
  },
  {
    items: "Yoga",
    path: "/yoga",
  },
  {
    items: "About",
    path: "/aboutus",
  },
  {
    items: "Village Industries",
    path: "/village",
  },
];

function DrawerAppBar(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const handleLogout = (e) => {
    localStorage.removeItem(user);
    e.preventDefault();
    dispatch(logout()); // Dispatch the logout action

    alert("You have been logged out");
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "50%", height: "50%", margin: "0 auto" }}
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.items} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.items} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* New menu items */}
        {user ? (
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to={"/orders/find/" + user.others._id}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary="ORDERS" />
            </ListItemButton>
          </ListItem>
        ) : null}

        {user ? null : (
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/register"
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary="REGISTER" />
            </ListItemButton>
          </ListItem>
        )}

        {user ? (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} sx={{ textAlign: "center" }}>
              <ListItemText primary="SIGN OUT" />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton
              component={NavLink}
              to="/login"
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary="LOGIN" />
            </ListItemButton>
          </ListItem>
        )}
        <ListItem>
          <ListItemButton
            component={NavLink}
            to="/cart"
            sx={{ textAlign: "center" }}
          >
            <ListItemText
              primary={
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </MenuItem>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#6D3516", width: "100vw" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#6D3516", width: "100vw" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ padding: "10px", width: "25%", height: "25%" }}
            />
          </Typography>
          <Box
            sx={{ alignItems: "center", display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => (
              <Button
                key={item.items}
                component={NavLink}
                to={item.path}
                sx={{ color: "#fff", padding: "0 30px" }}
              >
                {item.items}
              </Button>
            ))}
            {/* New menu items */}
            {user ? (
              <NavLink
                to={"/orders/find/" + user.others._id}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <MenuItem>ORDERS</MenuItem>
              </NavLink>
            ) : (
              <></>
            )}

            {user ? (
              <></>
            ) : (
              <NavLink
                to="/register"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <MenuItem>REGISTER</MenuItem>
              </NavLink>
            )}

            {user ? (
              <MenuItem onClick={handleLogout}>SIGN OUT</MenuItem>
            ) : (
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <MenuItem>LOGIN</MenuItem>
              </NavLink>
            )}

            <NavLink
              to="/cart"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#6D3516",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
