import { ReactNode } from "react";

type Summaries = {
  id: number;
  img: string;
  alt: string;
  title: string;
  description: ReactNode;
};
const summaries: Summaries[] = [
  {
    id: 1,
    img: "time",
    alt: "タイマー",
    title: "時間制限",
    description: (
      <p>
        制限時間は<span>15分</span>
      </p>
    ),
  },
  {
    id: 2,
    img: "people",
    alt: "帽子",
    title: "人数",
    description: (
      <p>
        1チーム最大<span>4人</span>
      </p>
    ),
  },
  {
    id: 3,
    img: "point",
    alt: "鍵",
    title: "ポイント",
    description: (
      <p>
        <span>依頼リスト</span>を確認しながら入団試験を遂行しよう
      </p>
    ),
  },
  {
    id: 4,
    img: "location",
    alt: "蒸気機関車",
    title: "場所",
    description: (
      <p>
        東京造形大学8号館2階
        <br />
        <span>「8-206」</span>教室
      </p>
    ),
  },
];
export default summaries;
