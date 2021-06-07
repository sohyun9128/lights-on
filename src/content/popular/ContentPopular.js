import React from "react";
import ContentBanner from "./ContentBanner.js";
import ContentPopularLogoList from "./ContentPopularLogoList.js";
import TodayKnowhow from "./TodayKnowhow.js";
import Review from "./Review.js";
import TodayLightRoom from "./TodayLightRoom";

function ContentPopular() {
  return (
    <>
      <ContentBanner />
      <ContentPopularLogoList />
      <TodayKnowhow />
      <Review />
      <TodayLightRoom />
    </>
  );
}

export default ContentPopular;
