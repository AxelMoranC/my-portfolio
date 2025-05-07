export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Movie Review App",
    year: 2023,
    description: "Movie Review Full Stack Application",
    url: "https://github.com/AxelMoranC/MovieReviewApp",
  },
  {
    title: "Kaggle, House Prices",
    year: 2025,
    description: "House Prices Prediction using Machine Learning",
    url: "https://www.kaggle.com/code/axelmorancaballero/notebookbc52aea2e0",
  },
  {
    title: "ConuHacks 2024 winner project",
    year: 2025,
    description: "1st place at ConuHacks 2024",
    url: "https://github.com/AxelMoranC/zombieShoot",
  },
];
