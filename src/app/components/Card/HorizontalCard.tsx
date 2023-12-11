import HideIcon from "@/app/icons/HideIcon";
import LinkIcon from "@/app/icons/LinkIcon";
import LocationFlag from "@/app/icons/LocationFlag";
import LoveIcon from "@/app/icons/LoveIcon";
import RightSideIcon from "@/app/icons/RightSideIcon";
import UrlIcon from "@/app/icons/UrlIcon";
import Image from "next/image";

const HorizontalCard = () => {
    return (
        <div>
            <div className="horizontal-card">
            <Image
                src="/AdsPictures.png"
                width={252.874}
                height={176.815}
                alt="slider"
            />
           <div>
           <div className="card-body">
                <h1 className="card-title">Flat - 123 m²</h1>
                <div className="card-icons">
                    <div className="card-icon">
                        <LocationFlag />
                    </div>
                    <div className="card-icon">
                        <LoveIcon />
                    </div>
                    <div className="card-icon">
                        <HideIcon />
                    </div>
                </div>
            </div>
            <h3 className="dublin">Dublin 01 - IFSC</h3>
            <div className="info">
                <ul>
                    <li className="data">5 Room</li>
                    <br />
                    <li className="data">2 Bedroom</li>
                    <br />
                    <li className="data">5 Room</li>
                </ul>
                <button className="balance-btn">
                124 600 €
                </button>
            </div>
            <div className="links">
                <p><LinkIcon/> Link 1</p>
                <p className="link"><LinkIcon/> Link 2</p>
                <p className="link"><LinkIcon/> Link 3</p>
                <button className="card_apply_btn">
                    Apply <RightSideIcon/>
                </button>
            </div>
           </div>
        </div>
        </div>
    );
};

export default HorizontalCard;