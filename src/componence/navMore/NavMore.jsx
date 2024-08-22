import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import "./NavMore.css";

const NavMore = () => {
  return (
    <div className="nav_More">
      <div className="more_notification">
        <IoIosNotificationsOutline className="more_notification_icon" />
        <span>Notification preference</span>
      </div>

      <div className="more_customer">
        <TfiHeadphoneAlt className="more_customer_icon" />
        <span>24*7 Customer Care</span>
      </div>

      <div className="more_advt">
        <FaArrowTrendUp className="more_advt_icon" />
        <span>Advatise</span>
      </div>

      <div className="more_download">
        <MdOutlineFileDownload className="more_download_icon" />
        <span>Download</span>
      </div>
    </div>
  );
};

export default NavMore;
