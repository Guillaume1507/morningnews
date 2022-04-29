import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";
import { List, Avatar } from "antd";
import Nav from "./Nav";

function ScreenSource(props) {
  const [sourceList, setSourceList] = useState([]);
  const [langue, setLangue] = useState("");
  useEffect(() => {
    setLangue(props.newLangue);
    const APIResultsLoading = async () => {
      const data = await fetch(
        `https://newsapi.org/v2/sources?language=${langue}&country=fr&apiKey=a9d2039e717f46a3882766e7788d0cf8`
      );
      const body = await data.json();
      setSourceList(body.sources);
    };

    APIResultsLoading();
  }, []);

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

export default ScreenSource;
