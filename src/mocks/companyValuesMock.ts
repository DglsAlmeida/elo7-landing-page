import constants from "../constants";

const { COMPANY_VALUES } = constants;

export default {
  qualityOfLife: {
    id: 1,
    src: "/images/qualidade.png",
    alt: "quality Of Life",
    title: COMPANY_VALUES.qualityOfLife.title,
    text: COMPANY_VALUES.qualityOfLife.text,
  },
  relaxedAtmosphere: {
    id: 2,
    src: "/images/descontracao.png",
    alt: "relaxed Atmosphere",
    title: COMPANY_VALUES.relaxedAtmosphere.title,
    text: COMPANY_VALUES.relaxedAtmosphere.text,
  },
  extraActivities: {
    id: 3,
    src: "/images/atividades.png",
    alt: "extra Activities",
    title: COMPANY_VALUES.extraActivities.title,
    text: COMPANY_VALUES.extraActivities.text,
  },
};
