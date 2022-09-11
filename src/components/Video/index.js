export default function Video() {
  return (
    <div className="full-screen">
      <div className="full-screen__body">
        <a
          className="full-screen__title"
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=4vwAP0YN60Y&ab_channel=6man"
        >
          БЕНЗОКОЛОНКА
        </a>

        <div className="full-screen__text">WATCH ON YOUTUBE</div>
      </div>
      <video  preload="auto" autoPlay loop muted playsinline className="full-screen__video">
        <source type="video/mp4" src="../bnz.mp4"></source>
      </video>
    </div>
  );
}
