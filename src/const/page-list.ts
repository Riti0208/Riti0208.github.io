const pageList = [
  {
    title: 'FPSゲームを作ろう',
    description: 'UnrealEngine5を使ってFPSゲームを作ります。',
    imagePath: '/images/fps_game_thumb.png',
    path: '/page/fps_game',
    name: 'fps_game',
  },
];

interface PageListType {
  title: string;
  description: string;
  imagePath: string;
  path: string;
  name: string;
}
export type { PageListType };
export default pageList;
