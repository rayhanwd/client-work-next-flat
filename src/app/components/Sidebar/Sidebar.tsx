import AnalysisIcon from "@/app/icons/AnalysisIcon";
import HistoryIcon from "@/app/icons/HistoryIcon";
import HomeIcon from "@/app/icons/HomeIcon";
import ProductIcon from "@/app/icons/ProductIcon";
import RightSideIcon from "@/app/icons/RightSideIcon";
import RoomIcon from "@/app/icons/RoomIcon";
import SalesIcon from "@/app/icons/SalesIcon";
import SheduleIcon from "@/app/icons/SheduleIcon";
import SurfaceIcon from "@/app/icons/SurfaceIcon";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div>
      <aside id="sidebar" className="sidebar">

        <div className="filter-setup">
          <div className="filter-icon">
            <Image
              src="/Filters_Icon.png"
              width={32}
              height={32}
              alt="Filter Icon"
            />
            <h1 className="filter-text">Filters</h1>
          </div>
          <div className="right-icon">
            <RightSideIcon />
          </div>
        </div>


        <ul className="sidebar-nav" id="sidebar-nav">




          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <HomeIcon />
              <span className="nav-text">Proterty Type</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <SurfaceIcon />
              <span className="nav-text">Surface</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <RoomIcon />
              <span className="nav-text">Room / Bedroom</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-register.html">
              <ProductIcon />
              <span className="nav-text">Products</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-login.html">
              <AnalysisIcon />
              <span className="nav-text">Analytics</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-error-404.html">
              <SheduleIcon />
              <span className="nav-text">Schedules</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <HistoryIcon />
              <span className="nav-text">History</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <SalesIcon />
              <span className="nav-text">Sales</span>
            </a>
          </li>

        </ul>

      </aside>
    </div>
  );
};

export default Sidebar;