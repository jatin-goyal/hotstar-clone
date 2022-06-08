import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setMovies } from "../features/movieSlice";
import { selectUserName } from "../features/userSlice";
import { db } from "../firebase";
import ImageSlider from "./ImageSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewer from "./Viewer";

export default function Home(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMoviesList = async () => {
      const data = await getDocs(moviesCollectionRef);

      data.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    };

    getMoviesList();
  }, [userName]);

  return (
    <Container>
      <ImageSlider />
      <Viewer />
      <Recommends />
      <Trending />
      <NewDisney />
      <Originals />
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

  &::after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    z-index: -1;
  }
`;
