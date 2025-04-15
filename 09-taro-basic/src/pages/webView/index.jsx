import React, { Component } from "react";
import { WebView } from "@tarojs/components";

import "./index.scss";

class WebViewPage extends Component {
  handleMessage = (event) => {
    console.log("收到消息：", event);
  };

  render() {
    return (
      <WebView
        src="https://www.bilibili.com/"
        onMessage={this.handleMessage}
        className="web_view"
      />
    );
  }
}

export default WebViewPage;
