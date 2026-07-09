import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Europe from "@react-map/europe";

const MAP_COLOR: string = "white";
const VISITED_COLOR: string = "#3B82F6";
const VISITED_COUNTRIES: string[] = [
    "Belgium",
    "Czech Republic",
    "Denmark",
    "France",
    "Germany",
    "Netherlands",
    "Norway",
    "Spain",
    "Sweden",
    "Switzerland",
    "Svalbard and Jan Mayen",
    "United Kingdom",
];

interface CityColorMap {
    [key: string]: string;
}

interface WindowSize {
    width: number;
    height: number;
  }

const useWindowSize = (): WindowSize => {
    const [size, setSize] = useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
};



const Home: React.FC = () => {
    const CITY_COLORS: CityColorMap = Object.fromEntries(VISITED_COUNTRIES.map(x => [x, VISITED_COLOR]));
    const navigate = useNavigate();
    const { width, height } = useWindowSize();
    const onSelect = (state: string | null) => {
        if (state !== null && VISITED_COUNTRIES.includes(state)) {
            navigate("/" + state.toLowerCase().replace(/ /g, "_"));
        }
    };
    
    // Note that we subtract one from the visited countries because
    // Svalbard is a part of Norway.
    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <p>Click on any one of the {VISITED_COUNTRIES.length - 1} countries in blue.</p>
            <Europe size={Math.min(0.8 * width, 0.75 * height)} type="select-single" disableHover={true} hints={true} selectColor={MAP_COLOR} cityColors={CITY_COLORS} onSelect={onSelect}/>
        </div>
    );
};

export default Home;
