import { useEffect, useState } from "react";

const SectionTitle = ({ heading, description }) => {

  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, [theme])

  console.log(theme);

  return (
    <section className="text-center my-8 p-6">
      <h2 className={`text-3xl font-bold mb-4 ${theme === "light" ? 'text-black' : 'text-white'}`}>{heading}</h2>
      <p className={`text-lg leading-relaxed ${theme === "light" ? 'text-black' : 'text-white'}`}>{description}</p>
    </section>
  );
};

export default SectionTitle;
