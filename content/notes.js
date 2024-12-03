import { useNavigate } from "react-router-dom";

import CRS from "../libs/tools";

const aabbcc = JSON.parse(
  '{"steps":[{"lightStatus":1,"annotationStatus":0,"lightId":"b7620134fc665c7ef74dfb2cc78e05ce","x":88,"y":1427,"id":"div.post-content.entry-content","text":"第一个故事出自王巩的《闻见近录》。\\n\\n元丰年间，三司发生大火，宋神宗在皇宫里看见火光，转身就对身边的宦官说：“赶紧去让马步司就近派两指挥的士兵去救火！”\\n\\n指挥，是当时宋军的一个军事单位，一指挥一般四五百人，两指挥就是近千人。\\n\\n这时候枢密使冯京正在旁边，他说：“按规矩，发兵需要枢密院来宣旨，让宦官来调兵，这种风气不能开。”\\n\\n宋神宗恍然大悟，立刻让冯京在御榻前写命令，再交给宦官去调兵救火。","tip":"","bg":"#FF6900","time":1732114804462,"isActive":false,"offsetX":0.5,"offsetY":0.9,"parentW":657,"pre":"","suffix":"","images":[],"level":1},{"lightStatus":1,"annotationStatus":0,"lightId":"6585a94f6498704fb203f8048ab610d2","x":88,"y":1826,"id":"div.post-content.entry-content","text":"第二个故事出自《邵氏闻见录》。\\n\\n宋太祖时期，有一次大内失火。当时负责警卫的殿前都指挥使是宋太祖的老熟人王审琦，他一看宋太祖有危险，也不等命令，带着士兵就冲进大内灭火救官家。\\n\\n后来，王审琦遭到言官的弹劾，被罢归寿州（今安徽寿县），当然，这也是宋太祖的意思。\\n\\n临出发的时候，宋太祖对王审琦说：“你在没有得到命令的情况下带兵来救我，这是忠心。但是言官的说法也不能不听。”\\n\\n为了补偿，宋太祖答应把自己的女儿嫁给王审琦的儿子王承衍。因为王承衍已经娶了一个姓乐的姑娘，宋太祖让他们离婚，用丰厚的嫁妆把乐氏改嫁他人，然后让王承衍当了自己的女婿。\\n\\n盛大婚礼之后，宋太祖对王承衍说：“这下你爹可以放心了吧。”","tip":"","bg":"#FF6900","time":1732114810037,"isActive":false,"offsetX":0.5,"offsetY":0.9,"parentW":657,"pre":"","suffix":"","images":[],"level":1}],"setting":{"barInfo":{"right":2,"top":100,"status":"fold"}},"images":["https://chinadigitaltimes.net/chinese/files/2024/10/2024.10.jpg","https://chinadigitaltimes.net/chinese/files/2024/10/%E4%B8%87%E5%9C%A3%E8%8A%82.png","https://chinadigitaltimes.net/chinese/files/2024/09/%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AB%A5-1.png","https://chinadigitaltimes.net/chinese/files/2023/12/launch.png","data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20220%200\'%3E%3C/svg%3E","data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20220%200\'%3E%3C/svg%3E","data:image/svg+xml,%3Csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20401%20273\'%3E%3C/svg%3E"],"snapshots":[],"version":2,"categories":[],"pageId":"5ea8324cc5bfdbc5b13888fa890d0c53"}',
);

let scrollToHL = function (note) {
  CRS.log("scrollToHL", note);
  let tipX = note.x;
  let tipY = note.y; //number
  if (tipY <= 0) {
    return;
  }
  CRS.log("scrollToHL-y-x", { tipY, tipX });
  window.scrollTo({
    top: tipY - 100,
    left: tipX,
    behavior: "smooth",
  });
};
let plainFormat = function (str) {
  str = str.split("\n\n").join("\n");
  str = str.split("\n").join("<br />");
  // CRS.log(str);
  return str;
};

function Notes() {
  let notes = aabbcc.steps;
  let article = {};

  return (
    <>
      <div className="feynote-header">
        <h2>{article.title || "Feynman 笔记"}</h2>
      </div>
      <div className="feynote-main">
        {notes.map((note, index) => {
          return (
            <div className="feynote-item" key={index}>
              <div className="feynote-item-content">
                <span>{plainFormat(note.text)}</span>
              </div>
              {note.tip && (
                <div
                  className="feynote-item-remark"
                  onClick={() => {
                    scrollToHL(note);
                  }}
                >
                  {plainFormat(note.tip)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Notes;
