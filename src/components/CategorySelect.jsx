import useBlogStore from "@/store/useBlogStore";
import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

const CategorySelect = ({ category, setCategory }) => {
  const { allCategories } = useBlogStore();
  const [options, setOptions] = useState([]);

  const handleChange = (newValue) => {
    setCategory(newValue ? newValue.value : "");
  };

  const handleCreate = (inputValue) => {
    const newOption = { value: inputValue, label: inputValue };
    setOptions((prev) => [...prev, newOption]);
    setCategory(inputValue);
  };

  useEffect(() => {
    if (allCategories && allCategories.length > 0) {
      const newArr = allCategories.map((cat) => ({
        value: cat,
        label: cat,
      }));
      setOptions(newArr);
    }
  }, [allCategories]);

  return (
    <CreatableSelect
      isClearable
      value={category ? { value: category, label: category } : null}
      onChange={handleChange}
      onCreateOption={handleCreate}
      options={options}
      placeholder="Select or create category..."
      className="w-full"
    />
  );
};

export default CategorySelect;