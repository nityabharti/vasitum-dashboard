import "./Navbar.css";

import React from "react";
import profilePic from "../../assets/unsplash_OH2S9XAcLhc.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-search-bar">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className="navbar-menu">
        <div>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5015 22C13.8066 22 14.8745 21.0769 14.8745 19.9487H10.1284C10.1284 20.4928 10.3784 21.0145 10.8235 21.3992C11.2685 21.7839 11.8721 22 12.5015 22ZM19.6205 15.8462V10.7179C19.6205 7.56923 17.6747 4.93333 14.2812 4.2359V3.53846C14.2812 2.68718 13.4863 2 12.5015 2C11.5167 2 10.7217 2.68718 10.7217 3.53846V4.2359C7.3164 4.93333 5.38238 7.55897 5.38238 10.7179V15.8462L3.85177 17.1692C3.10427 17.8154 3.62634 18.9231 4.68233 18.9231H20.3087C21.3647 18.9231 21.8987 17.8154 21.1512 17.1692L19.6205 15.8462Z"
              fill="#B2B2B2"
            />
            <circle cx="17.5" cy="7" r="4.5" fill="#FF5151" stroke="white" />
          </svg>
        </div>

        <div>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 5.35403C3.5 4.72971 3.73705 4.13095 4.15901 3.68948C4.58097 3.24801 5.15326 3 5.75 3H19.25C19.8467 3 20.419 3.24801 20.841 3.68948C21.2629 4.13095 21.5 4.72971 21.5 5.35403V14.7702C21.5 15.3945 21.2629 15.9933 20.841 16.4347C20.419 16.8762 19.8467 17.1242 19.25 17.1242H8.46575C8.16741 17.1243 7.8813 17.2483 7.67037 17.4691L4.46075 20.8271C4.38215 20.9095 4.28193 20.9657 4.17279 20.9886C4.06365 21.0114 3.95049 20.9999 3.84762 20.9554C3.74476 20.9109 3.65683 20.8355 3.59495 20.7387C3.53307 20.6419 3.50002 20.5281 3.5 20.4116V5.35403ZM9.125 10.0621C9.125 9.74994 9.00647 9.45056 8.7955 9.22983C8.58452 9.00909 8.29837 8.88509 8 8.88509C7.70163 8.88509 7.41548 9.00909 7.2045 9.22983C6.99353 9.45056 6.875 9.74994 6.875 10.0621C6.875 10.3743 6.99353 10.6736 7.2045 10.8944C7.41548 11.1151 7.70163 11.2391 8 11.2391C8.29837 11.2391 8.58452 11.1151 8.7955 10.8944C9.00647 10.6736 9.125 10.3743 9.125 10.0621ZM13.625 10.0621C13.625 9.74994 13.5065 9.45056 13.2955 9.22983C13.0845 9.00909 12.7984 8.88509 12.5 8.88509C12.2016 8.88509 11.9155 9.00909 11.7045 9.22983C11.4935 9.45056 11.375 9.74994 11.375 10.0621C11.375 10.3743 11.4935 10.6736 11.7045 10.8944C11.9155 11.1151 12.2016 11.2391 12.5 11.2391C12.7984 11.2391 13.0845 11.1151 13.2955 10.8944C13.5065 10.6736 13.625 10.3743 13.625 10.0621ZM17 11.2391C17.2984 11.2391 17.5845 11.1151 17.7955 10.8944C18.0065 10.6736 18.125 10.3743 18.125 10.0621C18.125 9.74994 18.0065 9.45056 17.7955 9.22983C17.5845 9.00909 17.2984 8.88509 17 8.88509C16.7016 8.88509 16.4155 9.00909 16.2045 9.22983C15.9935 9.45056 15.875 9.74994 15.875 10.0621C15.875 10.3743 15.9935 10.6736 16.2045 10.8944C16.4155 11.1151 16.7016 11.2391 17 11.2391Z"
              fill="#B2B2B2"
            />
          </svg>
        </div>
        <div className="navbar-right">
          <div>
            <img id="profilePic" src={profilePic}></img>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;