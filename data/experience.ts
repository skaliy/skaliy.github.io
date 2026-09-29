import { JobDetail } from "./types"

export const experienceData: JobDetail[] = [
  {
    title: "Associate professor",
    company: "Western Norway University of Applied Sciences (HVL)",
    period: "2026 – Present",
    description: "Teaching and research in artificial intelligence and software engineering.",
  },
  {
    title: "Data scientist / researcher (part-time)",
    company: "Mohn Medical Imaging and Visualization Centre (MMIV), Haukeland University Hospital",
    period: "2026 – Present",
    description: "Research and development of AI solutions for medical imaging and reporting.",
  },
  {
    title: "Consultant (part-time)",
    company: "Royal Norwegian Naval Academy (Sjøkrigsskolen)",
    period: "2025 – Present",
    description: "Developing hands-on learning materials in scikit-learn and PyTorch for an existing machine learning course.",
  },
  {
    title: "Partner",
    company: "AkademiX",
    period: "2023 – Present",
    description: "Co-founded a consultancy that delivers artificial intelligence solutions, training and knowledge sharing.",
    link: "https://akademix.no/",
  },
  {
    title: "Postdoctoral fellow",
    company: "Mohn Medical Imaging and Visualization Centre (MMIV), Haukeland University Hospital",
    period: "2025 – 2026",
    description: "Research and development of AI solutions for medical imaging and reporting within the ASIS project (AI-supported Services for Image Diagnostics in Western Norway), in close collaboration with radiologists.",
  },
  {
    title: "Data scientist",
    company: "Lerøy Seafood",
    period: "2023 – 2025",
    details: [
      "Built MLOps infrastructure in Databricks, automating model deployment and launching two production-grade salmon price prediction models",
      "Supported Microsoft Copilot adoption through training development and hands-on generative AI workshops",
      "Developed two custom LLM solutions: a shipping document analyzer and an HR chatbot",
    ],
    detailsLink: {
      text: "The value of artificial intelligence and machine learning",
      url: "https://www.leroyseafood.com/en/about-us/news/the-value-of-artificial-intelligence-and-machine-learning/",
    },
  },
  {
    title: "Assistant professor II",
    company: "Western Norway University of Applied Sciences (HVL)",
    period: "2021",
    description: "20% position alongside PhD studies, teaching a machine learning course for third-year BSc students.",
  },
  {
    title: "Researcher",
    company: "University of Bergen, Department of Biomedicine",
    period: "2019 – 2020",
  },
  {
    title: "Data scientist (part-time)",
    company: "Bouvet ASA",
    period: "2019",
    description: "Combined with master's studies in software engineering at the University of Bergen.",
  },
  {
    title: "Teaching assistant",
    company: "Western Norway University of Applied Sciences (HVL)",
    period: "2015 – 2018",
    early: true,
  },
  {
    title: "Summer intern",
    company: "Capgemini",
    period: "2018",
    early: true,
  },
  {
    title: "Summer intern",
    company: "Nordea Liv",
    period: "2017",
    early: true,
  },
  {
    title: "Intern",
    company: "Vizrt",
    period: "2016",
    early: true,
  },
]
