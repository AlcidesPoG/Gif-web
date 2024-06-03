import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories((prev) => [...prev, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category, index) => {
        return <GifGrid category={category} key={index} />;
      })}
    </>
  );
};

export default GifExpertApp;
