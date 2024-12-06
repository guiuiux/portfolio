import { useTranslation } from "react-i18next";
import livrovid from "../assets/videos/livrodigital--card.webm";
import mackensinavid from "../assets/videos/mackensina.webm";

export const useProjectData = () => {
  const { t } = useTranslation();

  const iconMapping = {
    mackensina: "/images/tiny-icon/computer--pink.png",
    livro: "/images/tiny-icon/mobile--yellow.png",
    // Add more mappings as needed
  };

  return [
    {
      id: 1,
      title: "CASE STUDY",
      year: "2024",
      projectName: "MackEnsina",
      description: t("caseStudies.mackensina.description"),
      video: mackensinavid,
      link: "mackensina",
      icon: iconMapping["mackensina"], // Assign icon dynamically
    },
    {
      id: 2,
      title: "CASE STUDY",
      year: "2022",
      projectName: "SME Digital: Livro",
      description: t("caseStudies.livroDigital.description"),
      video: livrovid,
      link: "livro-digital",
      icon: iconMapping["livro"], // Assign icon dynamically
    },
  ];
};
