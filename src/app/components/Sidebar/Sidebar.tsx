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
import Link from "next/link";

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
            <Link className="nav-link collapsed" href="/">
              <HomeIcon />
              <span className="nav-text">Proterty Type</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" href="/">
              <SurfaceIcon />
              <span className="nav-text">Surface</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" href="/">
              <RoomIcon />
              <span className="nav-text">Room / Bedroom</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" href="/">
              <ProductIcon />
              <span className="nav-text">Products</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" href="/">
              <AnalysisIcon />
              <span className="nav-text">Analytics</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" href="/">
              <SheduleIcon />
              <span className="nav-text">Schedules</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" href="/">
              <HistoryIcon />
              <span className="nav-text">History</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" href="/">
              <SalesIcon />
              <span className="nav-text">Sales</span>
            </Link>
          </li>

        </ul>

      </aside>
    </div>
  );
};

export default Sidebar;