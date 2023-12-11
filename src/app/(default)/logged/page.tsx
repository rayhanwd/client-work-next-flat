"use client"
import HorizontalCard from "@/app/components/Card/HorizontalCard";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Switcher from "@/app/components/header/switcher/Switcher";
import DownIcon from "@/app/icons/DownIcon";
import SalesIcon from "@/app/icons/SalesIcon";
import SortIcon from "@/app/icons/SortIcon";
import Image from "next/image";

const page = () => {
    return (
        <div className="logged-page">
            <Sidebar/>
            <Image 
            src="/map.png"
            width={539}
            height={872}
            alt="map"
            />
            <div>
                <div className="logged-item">
                    <div className="sales">
                        <h3>Sales</h3>
                        <Switcher/>
                    </div>
                    <div className="price-btn">
                    <h3>Sales</h3>
                        <button>
                            <SalesIcon/>
                            Price
                            <DownIcon/>
                        </button>
                    </div>
                    <div className="price-btn">
                        <button>
                            <SortIcon/>
                            Sort By
                            <DownIcon/>
                        </button>
                    </div>
                </div>

                <HorizontalCard/>
                <HorizontalCard/>
                <HorizontalCard/>
                <HorizontalCard/>  

                <div className="ads-card">
                    <p className="ads_content">Google Advertisement every 6 ads</p>
                 </div> 
            </div>
        </div>
    );
};

export default page;