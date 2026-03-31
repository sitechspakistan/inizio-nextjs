import Link from "next/link";
import cityData from "@/data/city.json";
import Image from "next/image";

export default function Countries() {
    const cities = cityData[0];

    const countryNames = {
        us: "America",
        uk: "United Kingdom",
        aus: "Australia",
        nz: "New Zealand",
    };
    const imgCountry = {
        us: "usa",
        uk: "uk",
        aus: "aus",
        nz: "nz",

    }


    return (
        <section className="pt-20 pb-20">
            <div className="container">
                {Object.keys(cities).map((countryKey) => (
                    <div key={countryKey} className="country-box mb-10">
                        {/* <div className="d-flex align-items-center justify-content-center gap-2"> */}
                        {/* <img src={`/assets/images/flags/${imgCountry[countryKey]}.png`} className="flags" width={100} height={50} /> */}
                        <h2>{countryNames[countryKey]}</h2>
                        {/* </div> */}
                        <hr className="line" />
                        <div className="city d-flex justify-content-between flex-wrap">
                            {Array.from({ length: 6 }, (_, colIndex) => (
                                <ul key={colIndex}>
                                    {cities[countryKey]
                                        .filter((_, cityIndex) => cityIndex % 6 === colIndex)
                                        .map((cityName, index) => {
                                            // slug banaye city ka URL me jane ke liye
                                            const citySlug = cityName.toLowerCase().replace(/\s+/g, "-");
                                            return (
                                                <li key={index}>
                                                    <Link href={`/cities/${citySlug}`}>
                                                        {cityName}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                </ul>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}