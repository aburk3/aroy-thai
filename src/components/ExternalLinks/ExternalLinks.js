import React from "react";
import styled from "styled-components";
import "./ExternalLinks.module.css";

const Wrapper = styled.section`
  ul.externalLinks {
    list-style-type: none;
    position: absolute;
    right: 2%;
    margin: 0 auto;
    top: 25%;
  }

  ul.externalLinks > li {
    margin: 50px 0;
    text-decoration: none;
  }

  i {
    color: grey;
    transition: 0.2s;
    z-index: -5;
  }

  i:hover {
    color: #212121;
  }
`;

const ExternalLinks = () => (
  <Wrapper>
    <ul className="externalLinks">
      <li>
        <a
          href="https://www.facebook.com/Aroythaicuisinemobile/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-facebook-f fa-3x"></i>
        </a>
      </li>
      <li>
        <a href="mailto: aroythaimobile@gmail.com">
          <i className="fas fa-envelope fa-3x" />
        </a>
      </li>
      <li>
        <a
          href="https://www.google.com/maps/dir/30.6855936,-88.0607232/aroy+thai+mobile+al/@30.6853044,-88.0609304,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x889a4e31e0df0617:0xea586a29df7bcbb4!2m2!1d-88.0569448!2d30.6857583"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-map-pin fa-3x"></i>
        </a>
      </li>
    </ul>
  </Wrapper>
);

export default ExternalLinks;
