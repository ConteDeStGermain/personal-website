import React from "react";
import Layout from "../components/Layout.js";
import MyPassion from '../components/MyPassion.js';
import Skills from '../components/Skills.js';
import { Helmet } from "react-helmet";
import 'semantic-ui-css/semantic.min.css'

const IndexPage = () => {
  let height;
  let width;

  // Required for proper compilation of Gatsby build
  if(typeof window !== `undefined`) {
    height = window.innerHeight;
    width = window.innerWidth;
  }

  var title = (
    <h1  id='titleText'>
      Iustin Tapuc,<br/>
      <span id='testing'>Front-End React Developer</span>
    </h1> 
  );

  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>A passionate Front-end developer</title>
      </Helmet>
      <Layout title={title}>
        <MyPassion />
        <Skills height={height} width={width} /> 
      </Layout>
    </div>
  )
};

export default IndexPage
