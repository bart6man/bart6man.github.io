import React from "react";
import Header from "../components/Header";

export default function Songs() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="artist-block d-flex justify-around">
          <div className="artist-box d-flex ">
            <p className="pt-0">Profiles</p>
            <img width={280} height={280} alt="..." src="photos/songs.jpeg" />

            <div className="artist-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://open.spotify.com/artist/3V4KHbkMkDoXYajvUeGMy5?si=a2HWTOKXTKWxC51uwLbMwg"
              >
                <img alt="..." src="services/sp.svg" height={48} width={150} />
              </a>
            </div>
            <div className="artist-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://music.apple.com/ru/artist/6man/1487981186"
              >
                <img alt="..." src="services/ap.svg" height={48} width={150} />
              </a>
            </div>
            <div className="artist-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCjKgfQUzPLuVhX8xCvKutqQ"
              >
                <img alt="..." src="services/yb.svg" height={48} width={150} />
              </a>
            </div>
            <div className="artist-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/bart6man/?hl=ru"
              >
                <img
                  className="mb-10 mt-5"
                  alt="..."
                  src="services/in.png"
                  height={38}
                  width={150}
                />
              </a>
            </div>
          </div>
          <div className="artist-box d-flex ">
            <p className="pt-0">Last Release</p>
            <img width={280} height={280} alt="..." src="ran.jpg" />

            <div className="artist-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://open.spotify.com/album/4LJthrFYKnVDovPFhCvTH3?si=6jkpUcGRQOioCOMDCoJupg"
              >
                <img alt="..." src="services/sp.svg" height={48} width={150} />
              </a>
            </div>
            <div className="artist-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://music.apple.com/ru/artist/6man/1487981186"
              >
                <img alt="..." src="services/ap.svg" height={48} width={150} />
              </a>
            </div>
            <div className="artist-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=NlYabJmhUj4&ab_channel=VariousArtists-Topic"
              >
                <img alt="..." src="services/yb.svg" height={48} width={150} />
              </a>
            </div>
            <div className="artist-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vm.tiktok.com/ZMNT9DUm6/"
              >
                <img
                  className="mb-10 mt-5"
                  alt="..."
                  src="services/tt.png"
                  height={40}
                  width={150}
                />
              </a>
            </div>
          </div>
          <div className="artist-box d-flex ">
            <p className="pt-0">Last Album</p>
            <img width={280} height={280} alt="..." src="cover.png" />

            <div className="artist-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://open.spotify.com/album/45bGJI0DzM2jqdBzzVp7t7?si=iUp82p75T6euKOdqaLA9Lg"
              >
                <img alt="..." src="services/sp.svg" height={48} width={150} />
              </a>
            </div>
            <div className="artist-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://music.apple.com/us/album/red-city/1493328588"
              >
                <img alt="..." src="services/ap.svg" height={48} width={150} />
              </a>
            </div>
            <div className="artist-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://youtube.com/playlist?list=OLAK5uy_ktSxSB6GqX99KV_2jws05w_5hkmK2UrO0"
              >
                <img alt="..." src="services/yb.svg" height={48} width={150} />
              </a>
            </div>
            <div className="artist-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://soundcloud.com/666maninyourhead/sets/red-city?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
              >
                <img
                  className="mb-4"
                  alt="..."
                  src="services/sc.svg"
                  height={48}
                  width={150}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
