import React, { useState } from "react";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";
import "../../locales/i18n";

type Language = "en" | "vn";
const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    setAnchorEl(null);
  };

  const languages: { lng: Language; label: string }[] = [
    { lng: "en", label: "English" },
    { lng: "vn", label: "VietNam" },
  ];

  return (
    <>
      <div className="notification-header flex align-items-center justify-content-between">
        <h2 className="notification-title">Notifications</h2>
        <Tooltip title="Languages">
          <IconButton
            size="large"
            aria-label="language"
            color="inherit"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <Avatar
              sx={{ width: "22px", height: "22px" }}
              src={t("avatar")}
              alt=""
            />
          </IconButton>
        </Tooltip>
        <Menu
          elevation={0}
          id="language-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          {languages.map((language) => (
            <MenuItem
              key={language.lng}
              onClick={() => changeLanguage(language.lng)}
            >
              {language.label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
};

export default Header;
