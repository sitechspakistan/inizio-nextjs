import Link from "next/link";
import cityData from "@/data/city.json";

const COUNTRY_NAMES = {
  us: "United States",
  uk: "United Kingdom",
  aus: "Australia",
  nz: "New Zealand",
};

export default function Countries() {
  const cities = cityData[0];

  return (
    <section className="iz-root iz-container iz-section">
      {Object.keys(cities).map((countryKey) => (
        <div key={countryKey} className="iz-country iz-reveal">
          <h2>
            {COUNTRY_NAMES[countryKey] || countryKey.toUpperCase()}
            <small>{cities[countryKey].length} cities</small>
          </h2>
          <div className="iz-cities">
            {cities[countryKey].map((cityName, i) => {
              const citySlug = cityName.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link key={`${citySlug}-${i}`} href={`/cities/${citySlug}`}>
                  {cityName}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
