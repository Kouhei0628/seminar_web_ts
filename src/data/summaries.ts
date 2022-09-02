type Summaries = {
  id: number;
  img: string;
  alt: string;
  title: string;
  description: string;
}[];
const summaries: Summaries = [
  {
    id: 1,
    img: "time",
    alt: "タイマー",
    title: "時間制限",
    description: "制限時間は15分",
  },
  {
    id: 2,
    img: "people",
    alt: "帽子",
    title: "人数",
    description: "1チーム最大4人",
  },
  {
    id: 3,
    img: "point",
    alt: "鍵",
    title: "ポイント",
    description: "依頼リストを確認しながら入団試験を遂行しよう",
  },
  {
    id: 4,
    img: "location",
    alt: "蒸気機関車",
    title: "場所",
    description: "東京造形大学8号館2階「8-206」教室",
  },
];
export default summaries;
