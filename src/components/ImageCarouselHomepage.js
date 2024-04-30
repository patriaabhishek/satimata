import * as React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarouselHomepage = () => {

    const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images-carousel-homepage" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);

  const images = data.allFile.edges;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the autoplay speed as needed
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  return (
    <Slider {...settings}>
      {images.map(({ node }) => (
        <div key={node.id}>
          <img src={node.publicURL} alt={`Image`} style={imgStyle}/>
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarouselHomepage;


