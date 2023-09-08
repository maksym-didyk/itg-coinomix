import React from "react";
import { Link } from "gatsby";
import "./CardPost.scss";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
  imgUrl?: string;
};

export const CardPost: React.FC<Props> = ({ imgUrl = '' }) => {
  return (
    <div className="card-post">
      <div className="card-post__content">
        <div className="card-post__author">
          <a href="#/">
            <StaticImage src="../../assets/images/header/demo_user.jpg" alt="Demo user author" className="cardnewstop__author-photo" />
          </a>
          <div className="card-post__author-name">
            <a href="#/" className="card-post__author-link">Chris Moore</a>
            <span className="card-post__date">Sep 10, 2023</span>
          </div>
        </div>
        <div className="card-post__tags">
          <a href="#bitcoin" className="card-post__tagname"># Bitcoin</a>
          <a href="#beginners" className="card-post__tagname"># Beginners</a>
        </div>
        <div className="card-post__body">
          <h3>
            <Link to="/article" className="card-post__title">
              Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023
            </Link>
          </h3>

          <p className="card-post__description">
            The decision by the US Securities and Exchange Commission (SEC) to file a complaint against Binance caused frustration in the cryptocurrency community. Binance says it cooperated.
          </p>

          <Link to="/article" className="card-post__viewmore" title="View more">View more</Link>
        </div>

        {imgUrl && (
          <div className="card-post__imagewrapper">
            <Link to="/article">
              <img className="card-post__image" src={imgUrl} alt="" />
            </Link>
        </div>
          )}

        <div className="card-post__footer">
          <div className="card-post__social">
            <div className="card-post__social-content">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="#9D9D9D" stroke-width="2"/>
              </svg>
              27.7K Likes
            </div>
            <div className="card-post__social-content">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4.32698 6.63803L5.21799 7.09202L4.32698 6.63803ZM4.7682 20.2318L4.06109 19.5247H4.06109L4.7682 20.2318ZM18.362 16.673L18.816 17.564L18.816 17.564L18.362 16.673ZM19.673 15.362L20.564 15.816L20.564 15.816L19.673 15.362ZM19.673 6.63803L20.564 6.18404L20.564 6.18404L19.673 6.63803ZM18.362 5.32698L18.816 4.43597L18.816 4.43597L18.362 5.32698ZM5.63803 5.32698L6.09202 6.21799L5.63803 5.32698ZM7.70711 17.2929L7 16.5858L7.70711 17.2929ZM5 9.8C5 8.94342 5.00078 8.36113 5.03755 7.91104C5.07337 7.47262 5.1383 7.24842 5.21799 7.09202L3.43597 6.18404C3.18868 6.66937 3.09012 7.18608 3.04419 7.74817C2.99922 8.2986 3 8.97642 3 9.8H5ZM5 12V9.8H3V12H5ZM3 12V17H5V12H3ZM3 17V19.9136H5V17H3ZM3 19.9136C3 21.2054 4.56185 21.8524 5.4753 20.9389L4.06109 19.5247C4.40757 19.1782 5 19.4236 5 19.9136H3ZM5.4753 20.9389L8.41421 18L7 16.5858L4.06109 19.5247L5.4753 20.9389ZM15.2 16H8.41421V18H15.2V16ZM17.908 15.782C17.7516 15.8617 17.5274 15.9266 17.089 15.9624C16.6389 15.9992 16.0566 16 15.2 16V18C16.0236 18 16.7014 18.0008 17.2518 17.9558C17.8139 17.9099 18.3306 17.8113 18.816 17.564L17.908 15.782ZM18.782 14.908C18.5903 15.2843 18.2843 15.5903 17.908 15.782L18.816 17.564C19.5686 17.1805 20.1805 16.5686 20.564 15.816L18.782 14.908ZM19 12.2C19 13.0566 18.9992 13.6389 18.9624 14.089C18.9266 14.5274 18.8617 14.7516 18.782 14.908L20.564 15.816C20.8113 15.3306 20.9099 14.8139 20.9558 14.2518C21.0008 13.7014 21 13.0236 21 12.2H19ZM19 9.8V12.2H21V9.8H19ZM18.782 7.09202C18.8617 7.24842 18.9266 7.47262 18.9624 7.91104C18.9992 8.36113 19 8.94342 19 9.8H21C21 8.97642 21.0008 8.2986 20.9558 7.74817C20.9099 7.18608 20.8113 6.66937 20.564 6.18404L18.782 7.09202ZM17.908 6.21799C18.2843 6.40973 18.5903 6.71569 18.782 7.09202L20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597L17.908 6.21799ZM15.2 6C16.0566 6 16.6389 6.00078 17.089 6.03755C17.5274 6.07337 17.7516 6.1383 17.908 6.21799L18.816 4.43597C18.3306 4.18868 17.8139 4.09012 17.2518 4.04419C16.7014 3.99922 16.0236 4 15.2 4V6ZM8.8 6H15.2V4H8.8V6ZM6.09202 6.21799C6.24842 6.1383 6.47262 6.07337 6.91104 6.03755C7.36113 6.00078 7.94342 6 8.8 6V4C7.97642 4 7.2986 3.99922 6.74817 4.04419C6.18608 4.09012 5.66937 4.18868 5.18404 4.43597L6.09202 6.21799ZM5.21799 7.09202C5.40973 6.71569 5.71569 6.40973 6.09202 6.21799L5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404L5.21799 7.09202ZM8.41421 18V16C7.88378 16 7.37507 16.2107 7 16.5858L8.41421 18Z" fill="#9D9D9D"/>
                <path d="M8 9L16 9" stroke="#9D9D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 13L13 13" stroke="#9D9D9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              148 Comments
            </div>
            <div className="card-post__social-content">
              <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1360_3517)">
                  <path d="M19.6757 5.99995C19.6757 7.34619 18.5845 8.43755 17.2382 8.43755C15.892 8.43755 14.8008 7.34619 14.8008 5.99995C14.8008 4.65385 15.892 3.5625 17.2382 3.5625C18.5845 3.5625 19.6757 4.65385 19.6757 5.99995Z" fill="#9D9D9D"/>
                  <path d="M17.2382 9.00005C15.5837 9.00005 14.2383 7.6545 14.2383 5.99995C14.2383 4.34555 15.5837 3 17.2382 3C18.8928 3 20.2382 4.34555 20.2382 5.99995C20.2382 7.6545 18.8928 9.00005 17.2382 9.00005ZM17.2382 4.125C16.204 4.125 15.3633 4.96655 15.3633 5.99995C15.3633 7.03349 16.204 7.87505 17.2382 7.87505C18.2725 7.87505 19.1132 7.03349 19.1132 5.99995C19.1132 4.96655 18.2725 4.125 17.2382 4.125Z" fill="#9D9D9D"/>
                  <path d="M19.6757 18.0001C19.6757 19.3462 18.5845 20.4375 17.2382 20.4375C15.892 20.4375 14.8008 19.3462 14.8008 18.0001C14.8008 16.6539 15.892 15.5625 17.2382 15.5625C18.5845 15.5625 19.6757 16.6539 19.6757 18.0001Z" fill="#9D9D9D"/>
                  <path d="M17.2382 21C15.5837 21 14.2383 19.6545 14.2383 18.0001C14.2383 16.3456 15.5837 15 17.2382 15C18.8928 15 20.2382 16.3456 20.2382 18.0001C20.2382 19.6545 18.8928 21 17.2382 21ZM17.2382 16.125C16.204 16.125 15.3633 16.9666 15.3633 18.0001C15.3633 19.0335 16.204 19.875 17.2382 19.875C18.2725 19.875 19.1132 19.0335 19.1132 18.0001C19.1132 16.9666 18.2725 16.125 17.2382 16.125Z" fill="#9D9D9D"/>
                  <path d="M9.17583 12C9.17583 13.3462 8.08447 14.4374 6.73824 14.4374C5.39214 14.4374 4.30078 13.3462 4.30078 12C4.30078 10.6537 5.39214 9.5625 6.73824 9.5625C8.08447 9.5625 9.17583 10.6537 9.17583 12Z" fill="#9D9D9D"/>
                  <path d="M6.73824 14.9999C5.08383 14.9999 3.73828 13.6545 3.73828 12C3.73828 10.3454 5.08383 9 6.73824 9C8.39278 9 9.73833 10.3454 9.73833 12C9.73833 13.6545 8.39278 14.9999 6.73824 14.9999ZM6.73824 10.125C5.70401 10.125 4.86328 10.9664 4.86328 12C4.86328 13.0335 5.70401 13.8749 6.73824 13.8749C7.7726 13.8749 8.61333 13.0335 8.61333 12C8.61333 10.9664 7.7726 10.125 6.73824 10.125Z" fill="#9D9D9D"/>
                  <path d="M8.50905 11.6403C8.24799 11.6403 7.99448 11.5045 7.85646 11.2616C7.6517 10.9023 7.77777 10.4441 8.13702 10.2385L15.0962 6.27103C15.4554 6.06477 15.9137 6.19083 16.1193 6.55146C16.324 6.91071 16.198 7.36898 15.8387 7.57456L8.87943 11.542C8.76242 11.6087 8.63498 11.6403 8.50905 11.6403Z" fill="#9D9D9D"/>
                  <path d="M15.4676 17.8277C15.3415 17.8277 15.2141 17.7961 15.0971 17.7294L8.13778 13.7619C7.77852 13.5572 7.65259 13.0989 7.85735 12.7388C8.06128 12.3789 8.52024 12.2521 8.88031 12.4584L15.8396 16.4258C16.1989 16.6306 16.3248 17.0889 16.12 17.4489C15.9813 17.6919 15.7278 17.8277 15.4676 17.8277Z" fill="#9D9D9D"/>
                </g>
              </svg>
              134 Share
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
