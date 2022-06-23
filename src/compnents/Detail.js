import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import YouTube from "react-youtube";

export default function Detail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");

  let type;
  let subTitle;
  let backgroundImg;
  let description;
  let title;
  let cardImg;
  let titleImg;

  const opts = {
    height: "390",
    width: "100%",
    playVars: {
      autoplay: 0,
    },
  };

  let urlParams;

  const handleClick = () => {
    const url = detailData.video;
    // console.log(url);
    urlParams = new URLSearchParams(new URL(url).search);
    // console.log(urlParams);
    setTrailerUrl(urlParams.get("v"));
    // console.log(trailerUrl);
  };

  useEffect(() => {
    const getMovie = async () => {
      const movieRef = doc(db, "movies", id);
      try {
        const movie = await getDoc(movieRef);

        if (movie.exists()) {
          // console.log(movie.data());
          setDetailData(movie.data());
          // console.log(detailData);
        } else {
          // movie.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovie();
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData && detailData.backgroundImg} alt="photo" />
      </Background>
      <ImageTitle>
        <img src={detailData && detailData.titleImg} alt="" />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player onClick={handleClick}>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        <SubTitle>{detailData && detailData.subTitle}</SubTitle>
        <Description>{detailData && detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
}

const Container = styled.main`
  position: relative;

  text-align: left;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0px calc(3.5vw + 5px);

  /* &::after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    z-index: -1;
  } */
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    height: 100vh;
    width: 100vw;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 25vw;
  min-height: 200px;
  padding-bottom: 30px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 30vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 12px 0px 16px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;
