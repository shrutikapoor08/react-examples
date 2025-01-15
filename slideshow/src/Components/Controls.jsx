function Controls({ activeIndex, setActiveIndex, totalSlides }) {
  const handleDecrement = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const handleIncrement = () => {
    if (activeIndex < totalSlides - 1) setActiveIndex(activeIndex + 1);
  };
  return (
    <div className="controls">
      <button
        className="control-btn left"
        onClick={handleDecrement}
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button
        className="control-btn right"
        onClick={handleIncrement}
        aria-label="Next slide"
      >
        &#8250;
      </button>
    </div>
  );
}

export default Controls;
