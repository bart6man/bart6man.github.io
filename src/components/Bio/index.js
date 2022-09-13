import Button from "./Buttons";

import { useState } from "react";

export default function Bio() {
  const [language, setLanguage] = useState("ukr");

  const uLang = {
    name: "Укр",
    imageUrl: "../ukr.jpg",
  };

  const eLang = {
    name: "Eng",
    imageUrl: "../gb.png",
  };

  return (
    <>
      <div className="content">
        <div className="content-container">
          <div className="bio">
            <div className="bio-title d-flex justify-center ">
              <h2>DIGITAL ACTIVITY</h2>
            </div>
            <div className="bio-buttons">
              <Button
                name={uLang.name}
                url={uLang.imageUrl}
                langChange={() => setLanguage("ukr")}
              />
              <Button
                name={eLang.name}
                url={eLang.imageUrl}
                langChange={() => setLanguage("eng")}
              />
            </div>
            {language === "ukr" ? (
              <div className="bio-text mt-40">
                <p>
                  З перших демо до першого кліпу минуло 7 років.
                  <a
                    className="bio-link"
                    href="https://www.youtube.com/watch?v=5pDHzy1_UHw&ab_channel=6man"
                    target="_blank"
                    rel="noreferrer"
                  >
                    "MONEYWALK"
                  </a>
                  . Це було аматорське vhs відео про безтурботне життя у Кривому
                  Розі. Тоді стало ясно, що треба прагнути якості. Згодом я й
                  познайомився з Максимом, власником{" "}
                  <a
                    className="bio-link"
                    href="https://www.tritonstudiorecord.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Triton Records
                  </a>
                  .
                </p>
                <p>
                  У той момент мене запостили на тоді ще найактуальнішому
                  хіп-хоп порталі СНД, FAST FOOD MUSIC, тому вирішено було
                  відтворити в майбутньому альбомі дух рідного міста.
                </p>
                <p>
                  У мережі з'явився{" "}
                  <a
                    className="bio-link"
                    href="https://www.youtube.com/watch?v=4oTcfnoqGE0&ab_channel=6man"
                    target="_blank"
                    rel="noreferrer"
                  >
                    "Broskiy/Dymniy"
                  </a>{" "}
                  - вайб відео на однойменний синглу з майбутнього альбому
                  "REDCITY"
                </p>
                <br />
                <br />
                <p>
                  Інтро трек "Кривий Ріг-головний" занурює вас у атмосферу
                  метрополітену, де ти очікуєш свого вагону. Саме у концепції
                  руху під землею і розкривається анархістський дух прогресивної
                  молоді, для якої творчість - це єдине, що надихає жити в
                  умовах, де твоє майбутнє вирішують за тебе. На фоні однотипних
                  "тайп оф бітс" платівка відрізняється своєю музичною частиною.
                  6 з 7 инструменталів були написані артистом власноруч. За біт
                  для п'ятого треку відповідав{" "}
                  <a
                    className="bio-link"
                    href="https://www.instagram.com/hoodproudz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    HOODPROUDS
                  </a>
                  - давній друг і наставник 6man'a. Саме трек "Gasnem"
                  відрізняється найбільше серед треклісту
                </p>
                <br />
                <br />
                <p>
                  2020. Карантин. Скрута. Біль. Досвід. З'являється
                  "Бензоколонка" . Надхненний музикою Prodigy, яка грала на
                  кухні "Тайського привіту", артист створив біт і наступного
                  ранку текст був вже готовий. Але якою ціною? "Мені вистачило
                  20 хвилин, щоб вилиту увесь біль, накопичений за ті пів року,
                  що я прожив у Києві"- казав 6man у своїх сторіз. З того
                  моменту погляд на творчість змінив свій вектор. І з того часу,
                  проєкт 6man вже набував локальну популярність у Києві
                </p>
              </div>
            ) : (
              <div className="bio-text mt-40">
                <p>
                  7 years passed from the first demos to the first music video.
                  <a
                    className="bio-link"
                    href="https://www.youtube.com/watch?v=5pDHzy1_UHw&ab_channel=6man"
                    target="_blank"
                    rel="noreferrer"
                  >
                    "MONEYWALK"
                  </a>
                  . It was an amateur vhs video about carefree life in Kryvyi
                  Rih. Then it became clear that we should strive for quality.
                  Later, I met Maxim, the owner of{" "}
                  <a
                    className="bio-link"
                    href="https://www.tritonstudiorecord.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Triton Records
                  </a>
                  .
                </p>
                <p>
                  My records were posted to back then the most relevant hip-hop
                  portals of the CIS, FAST FOOD MUSIC, so it was decided to show
                  in the spirit of the native city in the upcoming album.
                </p>

                <p>
                  <a
                    className="bio-link"
                    href="https://www.youtube.com/watch?v=4oTcfnoqGE0&ab_channel=6man"
                    target="_blank"
                    rel="noreferrer"
                  >
                    "Broskiy/Dymniy"
                  </a>{" "}
                  is a single with a vibe video from the upcoming
                  album "REDCITY" that has appeared online
                </p>
                <br />
                <br />
                <p>
                  The intro track "Krivyy Rig-holovny" immerses you in the
                  atmosphere of the subway, where you are waiting for your
                  train. It is in the concept of the underground movement that
                  the anarchist spirit of progressive youth is revealed, for
                  whom creativity is the only thing that inspires living in
                  conditions where they want to decide your future for you.
                  Against the background of the same type of beats, the album
                  differs in its musical part. 6 out of 7 instrumentals were
                  made by the artist himself. The beat for the fifth track was
                  provided by{" "}
                  <a
                    className="bio-link"
                    href="https://www.instagram.com/hoodproudz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    HOODPROUDS
                  </a>{" "}
                  - 6man's old friend and mentor. It is the track "Gasnem" that
                  stands out the most among the tracklist
                </p>
                <br />
                <br />
                <p>
                  2020. Quarantine. Difficulty. Pain. Experience. "Benzokolonka"
                  appears. Inspired by "the Prodigy" which played in the kitchen
                  of "Thai Hi", the artist created a beat and the next morning
                  the lyrics were ready. But at what cost? "20 minutes was
                  enough for me to pour out all the pain accumulated during the
                  half a year I lived in Kyiv" said 6man in his stories. From
                  that moment, the view on creativity changed its vector. And
                  from that time, the 6man project was already gaining local
                  popularity in Kyiv
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
