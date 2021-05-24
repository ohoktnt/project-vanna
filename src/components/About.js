import React from "react";
import styled from "styled-components";
import Gallery from 'react-grid-gallery';

function About() {
  const images = [
    {
      src:"/images/makeup1.JPG",
      thumbnail: "/images/makeup1.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/makeup2.JPG",
      thumbnail: "/images/makeup2.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/makeup3.JPG",
      thumbnail: "/images/makeup3.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/makeup5.JPG",
      thumbnail: "/images/makeup5.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/hair2.JPG",
      thumbnail: "/images/hair2.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/makeup6.JPG",
      thumbnail: "/images/makeup6.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/makeup7.JPG",
      thumbnail: "/images/makeup7.JPG",
      thumbnailWidth: 250,
      thumbnailHeight: 174,
    },
    {
      src:"/images/makeup8.JPG",
      thumbnail: "/images/makeup8.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/makeup9.JPG",
      thumbnail: "/images/makeup9.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/makeup10.JPG",
      thumbnail: "/images/makeup10.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/makeupBA2.JPEG",
      thumbnail: "/images/makeupBA2.JPEG",
      thumbnailWidth: 300,
      thumbnailHeight: 174,
    },
    {
      src:"/images/hair1.JPG",
      thumbnail: "/images/hair1.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/hair3.JPG",
      thumbnail: "/images/hair3.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/makeupBA1.JPEG",
      thumbnail: "/images/makeupBA1.JPEG",
      thumbnailWidth: 275,
      thumbnailHeight: 174,
    },
    {
      src:"/images/hair4.JPG",
      thumbnail: "/images/hair4.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/hair5.JPG",
      thumbnail: "/images/hair5.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/hair6.JPG",
      thumbnail: "/images/hair6.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/hair7.JPG",
      thumbnail: "/images/hair7.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/pose1.JPG",
      thumbnail: "/images/pose1.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/pose2.JPG",
      thumbnail: "/images/pose2.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },
    {
      src:"/images/pose3.JPG",
      thumbnail: "/images/pose3.JPG",
      thumbnailWidth: 150,
      thumbnailHeight: 174,
    },

  ]

  return (
    <Container>
      <InfoContainer>
        <Info>
          <h2>Who Am I?</h2>
          <p>
            My name is Vanna and I am a self taught beautician. With my previous
            working experince in salons, I have gained the skills and confidence
            to start up my own business and provide fun beautiful services. 
          </p>
        </Info>
        <Headshot src="/headshot.png" />
      </InfoContainer>
      <h2>Portfolio</h2>
      {/* <PortfolioGrid>
        <Wrap>
          <img src="/images/makeup1.JPG" />
        </Wrap>
        <Wrap>
          <img src="/images/makeup2.JPG" />
        </Wrap>
        <Wrap>
          <img src="/images/makeup3.JPG" />
        </Wrap>
        <Wrap>
          <img src="/images/makeup4.JPG" />
        </Wrap>
        <Wrap>
          <img src="/images/makeup5.JPG" />
        </Wrap>
        <Wrap>
          <img src="/images/makeup6.JPG" />
        </Wrap>
        <Wrap>
          <img src="/images/makeup7.JPG" />
        </Wrap>
        <Wrap>
          <img src="/images/makeup8.JPG" />
        </Wrap>
        <Wrap>
          <img src="/images/makeup9.JPG" />
        </Wrap>
        <Wrap>
          <img src="/images/makeup10.JPG" />
        </Wrap>
        <Wrap>
          <img src="/images/makeupBA1.JPEG" />
        </Wrap>
        <Wrap>
          <img src="/images/makeupBA2.JPEG" />
        </Wrap>
      </PortfolioGrid> */}
      <GalleryContainer>
        <Gallery images={images}/>
      </GalleryContainer>
    </Container>
  );
}

export default About;

const Container = styled.div`
  width: 60%;
  margin: 10px auto;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: space-around;
  align-items: center;
`;

const Info = styled.div`
  p {
    width: 50%;
    margin: 0px auto;
  }
`;

const Headshot = styled.img`
  border-radius: 50% 10%;
  height: 25rem;
`;

const GalleryContainer = styled.div`
  border: 2px solid red;
  display: flex;
  padding: 20px;
`;

// const PortfolioGrid = styled.div`
//   display: grid;
//   grid-gap: 5px;
//   grid-template-columns: repeat(4, auto);
// `;

// const Wrap = styled.div`
//   cursor: pointer;
//   border-radius: 10px;
//   overflow: hidden; // bc image was overlapping past border
//   border: 3px solid rgba(249, 249, 249, 0.1);
//   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   &:hover {
//     transform: scale(1.05);
//     border-color: rgba(249, 249, 249, 0.8);
//     box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
//       rgb(0 0 0 / 72%) 0px 30px 22px -10px;
//   }
// `;
