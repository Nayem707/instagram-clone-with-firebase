import { useEffect, useState } from "react";
import "./App.css";
// import Post from "./components/Post";
import { Layout } from "antd";
import Form from "./components/Form";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <a href="#home" className="logo">
            Instagram
          </a>
        </Header>
        <Content className="post_content">
          <Form />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
