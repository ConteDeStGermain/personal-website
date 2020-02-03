import React from "react";
import Layout from "../components/Layout.js";
import MyPassion from '../components/MyPassion.js';
import Skills from '../components/Skills.js';
import 'semantic-ui-css/semantic.min.css'

const IndexPage = () => {
  return (
    <Layout>
      <MyPassion />
      <Skills height={window.innerHeight} width={window.innerWidth} /> 
    </Layout>
  )
};

export default IndexPage
