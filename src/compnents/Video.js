import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Header from "./Header";

export default function Video() {
  const { id } = useParams();
  console.log(id);

  const opts = {
    height: "420",
    width: "100%",
    playVars: {
      autoplay: 1,
    },
  };

  //   let urlParams;

  //   const handleClick = () => {
  //     const url = detailData.video;
  //     // console.log(url);
  //     urlParams = new URLSearchParams(new URL(url).search);
  //     // console.log(urlParams);
  //     setTrailerUrl(urlParams.get("v"));
  //     // console.log(trailerUrl);
  //   };

  return (
    <div>
      <Header />
      <YouTube videoId={id} opts={opts} />
    </div>
  );
}
