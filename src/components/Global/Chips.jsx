const Chips = ({ color, setCategories, categories }) => {
    const handleClick = (id) => {
      const updatedCategories = categories.filter((category) => category !== id);
      setCategories(updatedCategories);
    };
  
    return (
      <div style={{ width: "40vw" }}>
        {categories.map((category) => (
          <button
            key={category}
            style={{
              background: `${color}`,
              borderRadius: "13px",
              width: "112px",
              color: "white",
              border: "none",
              padding: "5px",
              height: "32px",
              flexShrink: 0,
              margin: "11px",
            }}
            onClick={() => handleClick(category)}
          >
            {category}
            <span style={{ color: "black", marginLeft: "5px" }}> X</span>
          </button>
        ))}
      </div>
    );
  };
  
  export default Chips;
  