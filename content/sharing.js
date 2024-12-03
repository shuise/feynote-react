import { useNavigate } from "react-router-dom";

function Sharing(props) {
  let isSharing = true;

  let topics = [];

  function createPublicLink() {}

  // if (!isSharing) {
  //   return <></>;
  // }

  return (
    <div>
      <div className="feynote-login">
        <div className="feynote-topics">
          <div className="feynote-label">话题：</div>
          {topics.map((item, index) => {
            return (
              <label key={index}>
                <input name="article-topics" type="checkbox" value={item.id} />
                <span>{item.name}</span>
              </label>
            );
          })}
          <div style={{ height: "10px" }}></div>
          <div className="feynote-label">范围：</div>
          <label>
            <input name="article-public" type="radio" value="1" />
            <span>公开</span>
          </label>
          <label>
            <input name="article-public" type="radio" value="0" />
            <span>仅自己可见</span>
          </label>
        </div>
        <div className="feynote-tags">
          <span className="feynote-button" onClick={createPublicLink}>
            发布分享
          </span>
          <span
            onClick={() => {
              isSharing = false;
            }}
          >
            取消
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sharing;
