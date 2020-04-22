import React, { Component } from "react";
import "./bootstrap.css";
import "./style.css";
import "./plugin.css";
const Leftnavbar = () => {
  return (
    <div className="left-bar">
      <div className="logo">
        <a href="#">
          <img src="./images/logo.svg" alt="" />
        </a>
      </div>
      <div className="left-bar-inside" data-simplebar>
        <div className="navbar">
          <ul className="nav">
            <li>
              <a href="#">
                <svg
                  width="20px"
                  height="18px"
                  viewBox="0 0 20 18"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Symbols"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Component/Navigation/Left-Bar/team-all"
                      transform="translate(-31.000000, -114.000000)"
                      fill="inherit"
                      fillRule="nonzero"
                      className="nav-fill"
                    >
                      <g
                        id="domain-(1)"
                        transform="translate(31.000000, 114.000000)"
                      >
                        <path
                          d="M16,12 L14,12 L14,14 L16,14 M16,8 L14,8 L14,10 L16,10 M18,16 L10,16 L10,14 L12,14 L12,12 L10,12 L10,10 L12,10 L12,8 L10,8 L10,6 L18,6 M8,4 L6,4 L6,2 L8,2 M8,8 L6,8 L6,6 L8,6 M8,12 L6,12 L6,10 L8,10 M8,16 L6,16 L6,14 L8,14 M4,4 L2,4 L2,2 L4,2 M4,8 L2,8 L2,6 L4,6 M4,12 L2,12 L2,10 L4,10 M4,16 L2,16 L2,14 L4,14 M10,4 L10,0 L0,0 L0,18 L20,18 L20,4 L10,4 Z"
                          id="Shape"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li className="active">
              <a href="#">
                <svg
                  width="32px"
                  height="25px"
                  viewBox="0 0 32 25"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <filter
                      x="-9.9%"
                      y="-0.3%"
                      width="119.8%"
                      height="100.6%"
                      filterUnits="objectBoundingBox"
                      id="filter-1"
                    >
                      <feOffset
                        dx="0"
                        dy="0"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      ></feOffset>
                      <feGaussianBlur
                        stdDeviation="2"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      ></feGaussianBlur>
                      <feColorMatrix
                        values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.10423951 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                        result="shadowMatrixOuter1"
                      ></feColorMatrix>
                      <feMerge>
                        <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                      </feMerge>
                    </filter>
                  </defs>
                  <g
                    id="Symbols"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Component/Navigation/Left-Bar/360"
                      transform="translate(-25.000000, -331.000000)"
                      fill="inherit"
                      fillRule="nonzero"
                      className="nav-fill"
                    >
                      <g
                        id="Component/Navigation/Left-Bar"
                        filter="url(#filter-1)"
                      >
                        <g
                          id="account-supervisor-outline"
                          transform="translate(29.000000, 335.000000)"
                        >
                          <path
                            d="M17.4,12.75 C19.464,12.75 21.9,13.7214286 22.2,14.3042857 L22.2,15.1785714 L12.6,15.1785714 L12.6,14.3042857 C12.9,13.7214286 15.336,12.75 17.4,12.75 M17.4,10.9285714 C15.204,10.9285714 10.8,12.0457143 10.8,14.2678571 L10.8,17 L24,17 L24,14.2678571 C24,12.0457143 19.596,10.9285714 17.4,10.9285714 M8.4,9.71428571 C5.604,9.71428571 0,11.135 0,13.9642857 L0,17 L8.4,17 L8.4,15.1785714 L1.8,15.1785714 L1.8,13.9642857 C1.8,13.1992857 5.148,11.3414286 9.384,11.5357143 C9.89986046,10.9114638 10.5318096,10.3957603 11.244,10.0178571 C10.3079684,9.82360274 9.35548427,9.72193363 8.4,9.71428571 M8.4,1.82142857 C9.39411255,1.82142857 10.2,2.63690992 10.2,3.64285714 C10.2,4.64880437 9.39411255,5.46428571 8.4,5.46428571 C7.40588745,5.46428571 6.6,4.64880437 6.6,3.64285714 C6.6,2.63690992 7.40588745,1.82142857 8.4,1.82142857 M8.4,0 C6.4117749,0 4.8,1.6309627 4.8,3.64285714 C4.8,5.65475159 6.4117749,7.28571429 8.4,7.28571429 C10.3882251,7.28571429 12,5.65475159 12,3.64285714 C12,1.6309627 10.3882251,0 8.4,0 M17.4,4.25 C18.0627417,4.25 18.6,4.79365423 18.6,5.46428571 C18.6,6.1349172 18.0627417,6.67857143 17.4,6.67857143 C16.7372583,6.67857143 16.2,6.1349172 16.2,5.46428571 C16.2,4.79365423 16.7372583,4.25 17.4,4.25 M17.4,2.42857143 C15.7431458,2.42857143 14.4,3.78770701 14.4,5.46428571 C14.4,7.14086442 15.7431458,8.5 17.4,8.5 C19.0568542,8.5 20.4,7.14086442 20.4,5.46428571 C20.4,3.78770701 19.0568542,2.42857143 17.4,2.42857143 Z"
                            id="Shape"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="left-bar-bottom mt-auto">
          <div className="profile-progress">
            <div className="profile-progress-box">
              <img src="./images/completion-icon.png" alt="" />
            </div>
          </div>
          <div className="navbar bottom-navbar">
            <ul className="nav">
              <li>
                <a href="#">
                  <svg
                    width="28px"
                    height="28px"
                    viewBox="0 0 28 28"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <filter
                        x="-9.9%"
                        y="-0.3%"
                        width="119.8%"
                        height="100.6%"
                        filterUnits="objectBoundingBox"
                        id="filter-1"
                      >
                        <feOffset
                          dx="0"
                          dy="0"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        ></feOffset>
                        <feGaussianBlur
                          stdDeviation="2"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        ></feGaussianBlur>
                        <feColorMatrix
                          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.10423951 0"
                          type="matrix"
                          in="shadowBlurOuter1"
                          result="shadowMatrixOuter1"
                        ></feColorMatrix>
                        <feMerge>
                          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                          <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                      </filter>
                    </defs>
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Component/Navigation/Left-Bar/dashboard"
                        transform="translate(-26.000000, -628.000000)"
                        fill="inherit"
                        className="nav-fill"
                      >
                        <g
                          id="Component/Navigation/Left-Bar"
                          filter="url(#filter-1)"
                        >
                          <g
                            id="icon-Chat-Copy"
                            transform="translate(28.000000, 630.000000)"
                          >
                            <path
                              d="M13,12 C13,12.552 12.552,13 12,13 C11.448,13 11,12.552 11,12 C11,11.448 11.448,11 12,11 C12.552,11 13,11.448 13,12 M16.82,13.358 C16.377,15.027 15.027,16.377 13.358,16.82 C9.558,17.828 6.172,14.442 7.18,10.642 C7.623,8.973 8.973,7.623 10.642,7.18 C14.442,6.172 17.828,9.558 16.82,13.358 M21,11 L19.344,11 C19.103,11 18.772,10.984 18.774,10.743 C18.779,9.854 18.488,8.59 17.846,7.898 C17.682,7.721 17.73,7.559 17.9,7.389 L19.071,6.281 C19.462,5.89 19.462,5.288 19.071,4.898 C18.681,4.507 18.047,4.523 17.657,4.913 L16.486,6.092 C16.316,6.262 16.053,6.283 15.852,6.151 C15.122,5.669 14.297,5.322 13.41,5.141 C13.174,5.092 13,4.897 13,4.656 L13,3 C13,2.448 12.552,2 12,2 C11.448,2 11,2.448 11,3 L11,4.656 C11,4.897 10.826,5.094 10.59,5.143 C9.703,5.324 8.878,5.672 8.148,6.154 C7.947,6.287 7.684,6.27 7.514,6.1 L6.343,4.929 C5.953,4.538 5.319,4.538 4.929,4.929 C4.538,5.319 4.538,5.953 4.929,6.343 L6.1,7.514 C6.27,7.684 6.296,7.953 6.154,8.148 C5.66,8.831 5.344,9.562 5.202,10.84 C5.175,11.079 4.897,11 4.656,11 L3,11 C2.448,11 2,11.448 2,12 C2,12.552 2.448,13 3,13 L4.656,13 C4.897,13 5.189,13.088 5.237,13.323 C5.418,14.21 5.673,14.872 6.154,15.602 C6.287,15.803 6.27,16.191 6.1,16.361 L4.929,17.594 C4.538,17.985 4.538,18.649 4.929,19.04 C5.319,19.43 5.953,19.446 6.343,19.055 L7.514,17.892 C7.684,17.722 7.947,17.709 8.148,17.842 C8.878,18.323 9.703,18.674 10.59,18.855 C10.826,18.904 11,19.103 11,19.344 L11,21 C11,21.552 11.448,22 12,22 C12.552,22 13,21.552 13,21 L13,19.344 C13,19.103 13.174,18.906 13.41,18.857 C14.297,18.676 15.122,18.327 15.852,17.846 C16.053,17.713 16.316,17.73 16.486,17.9 L17.657,19.071 C18.047,19.462 18.681,19.462 19.071,19.071 C19.462,18.681 19.462,18.047 19.071,17.657 L17.9,16.486 C17.73,16.316 17.713,16.053 17.846,15.852 C18.327,15.122 18.588,14.714 18.857,13.91 C18.934,13.682 19.103,13 19.344,13 L21,13 C21.552,13 22,12.552 22,12 C22,11.448 21.552,11 21,11"
                              id="settings-[#1491]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="nav-profile-img">
                    <img src="./images/user-pic.png" alt="" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="26px"
                    height="28px"
                    viewBox="0 0 26 28"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <filter
                        x="-9.9%"
                        y="-0.3%"
                        width="119.8%"
                        height="100.6%"
                        filterUnits="objectBoundingBox"
                        id="filter-1"
                      >
                        <feOffset
                          dx="0"
                          dy="0"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        ></feOffset>
                        <feGaussianBlur
                          stdDeviation="2"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        ></feGaussianBlur>
                        <feColorMatrix
                          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.10423951 0"
                          type="matrix"
                          in="shadowBlurOuter1"
                          result="shadowMatrixOuter1"
                        ></feColorMatrix>
                        <feMerge>
                          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                          <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                      </filter>
                    </defs>
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Component/Navigation/Left-Bar/dashboard"
                        transform="translate(-27.000000, -743.000000)"
                        fill="inherit"
                        fillRule="nonzero"
                        className="nav-fill"
                      >
                        <g
                          id="Component/Navigation/Left-Bar"
                          filter="url(#filter-1)"
                        >
                          <g
                            id="logout"
                            transform="translate(31.000000, 747.000000)"
                          >
                            <path
                              d="M13,15 L13,12 L6,12 L6,8 L13,8 L13,5 L18,10 L13,15 M11,0 C12.1045695,0 13,0.8954305 13,2 L13,4 L11,4 L11,2 L2,2 L2,18 L11,18 L11,16 L13,16 L13,18 C13,19.1045695 12.1045695,20 11,20 L2,20 C0.8954305,20 0,19.1045695 0,18 L0,2 C0,0.8954305 0.8954305,0 2,0 L11,0 Z"
                              id="Shape"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftnavbar;
