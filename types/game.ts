export type MediaItem =
  | { type: "video"; id: string }
  | { type: "image"; src: string };

export type Game = {
  id: number;
  title: string;
  description: string;
  media: MediaItem[];
  min: {
    os: string;
    ram: string;
    gpu: string;
  };
  rec: {
    os: string;
    ram: string;
    gpu: string;
  };
};