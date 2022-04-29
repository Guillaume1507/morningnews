import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";
import { List, Avatar } from "antd";
import Nav from "./Nav";
import { connect } from "react-redux";

function ScreenSource(props) {
  const [sourceList, setSourceList] = useState([]);
  // const [langue, setLangue] = useState("");
  useEffect(() => {
    console.log(props.langue);
    // setLangue(props.langue);
    const APIResultsLoading = async () => {
      const data = await fetch(
        `https://newsapi.org/v2/sources?language=${props.langue}&country=${props.langue}&apiKey=a9d2039e717f46a3882766e7788d0cf8`
      );
      const body = await data.json();
      setSourceList(body.sources);
    };

    APIResultsLoading();
  }, [props.langue]);

  return (
    <div>
      <Nav />

      <div className="Banner" />

      <div className="HomeThemes">
        <List
          itemLayout="horizontal"
          dataSource={sourceList}
          renderItem={(source) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`/images/${source.category}.png`} />}
                title={
                  <Link to={`/screenarticlesbysource/${source.id}`}>
                    {source.name}
                  </Link>
                }
                description={source.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    langue: state.langue,
  };
}

export default connect(mapStateToProps, null)(ScreenSource);
