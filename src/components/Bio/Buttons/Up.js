export default function Up() {
  return (
    <button
      className="up-button"
      onClick={(e) =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      {" "}
      <img src="/arr.svg" alt="xxx" />
    </button>
  );
}
