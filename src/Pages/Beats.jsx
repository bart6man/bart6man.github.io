import Header from "../components/Header";

export default function Beats() {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="content-container">
          <div className="video-block d-flex justify-center ">
            <iframe
            className="youtube-video"
              
              src="https://www.youtube.com/embed/IjGWtqcsQ-I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h2>Or play full playlist</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=W13D-36yM6c&list=PLtKGbcz2J23JONjmmFca0PSLyZL8KdP1x"
          >
            <img alt="..." src="services/yb.png" height={53} width={128} />
          </a>
        </div>
      </div>
    </div>
  );
}
