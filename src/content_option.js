import { Home } from "./pages/home";
import { FaPhp, FaJs, FaFigma, FaDatabase, FaServer, FaGit, FaSymfony, FaPython, FaArchive } from "react-icons/fa";

const logotext = "Lucas Gourmelon";
const meta = {
    title: "Lucas Gourmelon",
    description: ""
};

const texts = {
    voirprojet: "Voir le projet",
    mesprojets: "Mes projets",
    competencesprojet: "Compétences dévellopées",
    contactmenu: "Contactez moi",
    technos: "Technologies utilisées",
    follow: "Suivez-moi",
    accueil: "Accueil",
    portfolio: "Portfolio",
    
};

const introdata = {
    title: "Lucas Gourmelon",
    animated: {
        first: "alternant développeur",
        second: "en dernière année de BUT informatique",
        third: "à la recherche d'une école d'ingénieur en alternance",
    },
    description: "Bienvenue sur mon portfolio",
    homeimg: "https://picsum.photos/800/1600/?grayscale",
     
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const datacompetences = {
    competence1: {
        title: "Réaliser",
        description: "J'ai acquis une solide expérience dans la conception, le développement, le test et l'intégration" + 
            "d'applications informatiques répondant aux besoins spécifiques des utilisateurs. Je veille à documenter le code que je produis."
    },
    competence2: {
        title: "Optimiser",
        description: "J’ai acquis les compétences nécessaires pour analyser et améliorer les performances d’une "+
        "application, que ce soit en termes de rapidité, de précision ou de gestion des ressources."+
        " Je veille également à minimiser son impact environnemental."
    },
    competence3: {
        title: "Administrer",
        description: "J’ai appris à installer, à configurer et à maintenir des infrastructures et réseaux informatiques."+
        "J'ai également été sensibilisé aux enjeux de la sécurité informatique."
    },
    competence4: {
        title: "Gérer",
        description: "J’ai appris à concevoir et administrer des bases de données fiables et sécurisées."+
        "Je sais manipuler des données pour qu’elles soient cohérentes, accessibles et utilisables, tout en respectant "+
        "les réglementations en vigueur sur la confidentialité et la protection des données."
    },
    competence5: {
        title: "Conduire",
        description: "J’ai acquis une expérience dans la gestion de projets informatiques, en utilisant des méthodologies classiques ou agiles."+
        "J’ai appris à structurer les différentes phases du projet, à collaborer avec les parties prenantes et à assurer un suivi efficace pour "+
        "répondre aux besoins métiers."
    },
    competence6: {
        title: "Collaborer",
        description: "J’ai appris à travailler en équipe, à communiquer efficacement avec mes collègues et à collaborer avec des interlocuteurs "+
        "variés (métiers, clients, fournisseurs). J’ai également acquis des compétences en gestion de conflits et en résolution de problèmes."
    },

};

const dataportfolio = [
    {
        title: "AlHaIZ-Breizh",
        images: [
            require("./assets/images/apoc/apoc_accueil.png"),
            require("./assets/images/apoc/apoc_logement_cli.png"),
            require("./assets/images/apoc/apoc_recherche.png"),
            require("./assets/images/apoc/apoc_new_logement.png"),
            require("./assets/images/apoc/apoc_reservations.png"),
            require("./assets/images/apoc/apoc_logements.png"),
            require("./assets/images/apoc/apoc_connexion.png"),
        ],
        description: "Création d'un site pour un client fictif avec front-office client, back-office propriétaire, API en C, et configuration complète du serveur et de la base de données.",
        link: "https://github.com/LucasGourmelon/AlHaIZ-Breizh",
        competences: {
            competence1: "Développement du back-end en PHP natif communiquant avec le front-end en Javascript via des appels API.", 
            competence2: "Optimiser",
            competence3: "Configuration et mise en place du serveur Apache et développement d'une API en C pour pouvoir synchroniser avec d'autres sites et création d'un système d'abonnement par ICal", 
            competence4: "Conception et administration de la base de données PostgreSQL", 
            competence5: "Estimation des charges de travail et priorisation des tâches puis développement du site en suivant la méthode Scrum (Sprints, Daily meeting, Revue de sprint, Rétrospective)",
            competence6: "Travail en équipe de 6 personnes, répartition des tâches, communication avec les autres membres de l'équipe et avec le client.",
        },
        technos: {
            "PHP": FaPhp,
            "Javascript": FaJs,
            "Figma": FaFigma,
            "PostgreSQL": FaDatabase,
            "Apache": FaServer,
            "Git": FaGit,
        }
    },
    {
        title: "Portail National EDF",
        images: [require("./assets/images/logo_edf_carre.png")],
        description: "Participation au développement du nouveau portail national d’EDF puis chargé de MCO et de la maintenance évolutive du projet.",
        link: "",
        competences: {
            competence1: "Conception, développement et test de fonctionnalités demandés par les clients (EDF). Correction de bugs. Modification de l'UX/UI d'une section du site", 
            competence2: "Amélioration d'une fonction de recherche dans l'application et développements ayant pour but de réduire le temps de chargement des pages (gestion de cache, gestion du poid des images, réduction du nombre de requêtes)", 
            competence3: "Utilisation d'un serveur apache lors du développement",
            competence4: "Ajout et mise à jour de tables de la base de données dans le cadre du développement",
            competence5: "Participation aux réunions agiles avec l'équipe de développement et le client pour définir les priorités et les tâches à réaliser", 
            competence6: "Communication avec les autres membres de l'équipe et avec le client pour comprendre les besoins et les contraintes du projet", 
        },
        technos: {
            "PHP Symfony": FaSymfony,
            "PostgreSQL": FaDatabase,
            "Javascript": FaJs,
            "Apache": FaServer,
            "Git": FaGit,
        }
    },
    {
        title: "Ant-gorithm",
        images: [
            require("./assets/images/ant-gorithm/ant.png"),
            require("./assets/images/ant-gorithm/window.png"),
        ],
        description: "Simulation où des fourmis évoluent pour survivre en fonction de plusieurs paramètres grâce à un algorithme génétique.",
        link: "https://github.com/LucasGourmelon/AlgoGenetique",
        competences: {
            competence1: "Développement d'une application Tkinter mettant en scène une fourmi dans un environnement où elle doit chercher de la nourriture.",
            competence2: "Mise en place d'un algorithme génétique ayant pour but de faire survivre la fourmi le plus longtemps possible.", 
            competence3: false, competence4: false, competence5: false, competence6: false},
        technos: {
            "Python": FaPython,
            "Tkinter": FaArchive,
        }
    },
    {
        title: "Maquette d'un site vitrine pour un client réel",
        images: [
            require("./assets/images/bella-italia/accueil_desktop.png"),
            require("./assets/images/bella-italia/accueil_mobile.png"),
        ],
        description: "Maquettage d’un site vitrine pour une entreprise de vente de produits italiens.",
        link: "https://www.figma.com/design/s2egM4u02x1AM2Q3hTlRbi/Bella-Italia?node-id=0-1&t=uRWLNv604VQsIbYR-1",
        competences: {
            competence1: "Création de maquette sur Figma.", 
            competence2: false, competence3: false, competence4: false, 
            competence5: "Réunions avec les personnes de l'entreprise pour comprendre leurs besoins et leurs attentes.",
            competence6: "Travail en duo dans le cadre du projet.",
        },
        technos: {
            "Figma": FaFigma,
        }
    },
];

const contactConfig = {
    YOUR_EMAIL: "lucasgourmelon12@gmail.com",
    YOUR_SERVICE_ID: "service_s4fbm28",
    YOUR_TEMPLATE_ID: "template_4k1kl6f",
    YOUR_USER_ID: "QQtdZPrCvHoWZ2kfg",
};

const socialprofils = {
    github: "https://github.com/LucasGourmelon",
    linkedin: "https://www.linkedin.com/in/lugourmelon/",
};
export {
    meta,
    texts,
    dataabout,
    datacompetences,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};