import Image from "next/image";

const details = () => {
    return (
        <>
            <div className=" grid grid-cols-2">
                <div>
                    <h1>Grid 1</h1>
                </div>
                <div>
                    <Image 
                    src="/map.png"
                    alt="map"
                    width={732}
                    height={929}
                    />
                    <Image 
                    src="/graph.png"
                    alt="Graph Chart"
                    width={754}
                    height={238}
                    className="mt-[28px]"
                    />
                </div>

            </div>
        </>
    );
};

export default details;