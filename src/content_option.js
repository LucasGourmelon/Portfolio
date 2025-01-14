import { Home } from "./pages/home";
import { FaPhp, FaJs, FaFigma, FaDatabase, FaServer, FaGit, FaSymfony, FaPython, FaArchive, FaHtml5, FaCss3, FaFileCsv, FaFileCode } from "react-icons/fa";

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
    cv: "Mon CV"
};

const introdata = {
    title: "Lucas Gourmelon",
    animated: {
        first: "à la recherche d'une alternance en développement web Full Stack",
        second: "en dernière année de BUT informatique",
        third: "alternant développeur",
    },
    description: "Bienvenue sur mon portfolio",
    homeimg: "https://picsum.photos/800/1600/?grayscale",
    cv: require("./assets/cv.pdf")
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
        description: "Création d'un site pour une association fictive spécialisée dans la location de logements en Bretagne. Le site propose un front-office où les utilisateurs peuvent rechercher "+
        "et réserver des logements en fonction de leurs critères. Il inclut également un back-office permettant aux propriétaires de gérer leurs logements et les réservations."+
        "Le site permet la création de comptes clients et la connexion à des comptes existants, tant pour le front-office que le back-office. Les propriétaires peuvent s'abonner "+
        "à un calendrier iCal pour suivre les réservations de leurs logements depuis leur application d'agenda préférée."+
        "Une API, développée en langage C, permet de synchroniser les données des logements et des réservations avec d'autres sites en interrogeant la base de données.",
        link: {
            link: "https://github.com/LucasGourmelon/AlHaIZ-Breizh"
        },
        competences: {
            competence1: "Développement du back-end en PHP natif communiquant avec le front-end en Javascript via des appels API.", 
            competence2: "Développement de filtres optimisés aux niveaux des requêtes AJAX et des requêtes en base de données, pour la page de recherche de logement et de la page de réservation.",
            competence3: "Configuration et mise en place du serveur Apache et développement d'une API en C pour pouvoir synchroniser avec d'autres sites et création d'un système d'abonnement par ICal", 
            competence4: "Conception et administration de la base de données PostgreSQL", 
            competence5: "Estimation des charges de travail et priorisation des tâches puis développement du site en suivant la méthode Scrum (Sprints, Daily meeting, Revue de sprint, Rétrospective)",
            competence6: "Travail en équipe de 6 personnes, répartition des tâches, communication avec les autres membres de l'équipe et avec le client. Répartition du travail en fonction des affinités de chacun aux technologies et aux tâches à réaliser.",
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
        title: "Pokédex",
        images: [
            require("./assets/images/pokemon/accueil.png"),
            require("./assets/images/pokemon/image_hover.png"),
            require("./assets/images/pokemon/modal_infos.png"),
        ],
        description: "Développpement d'un site web en HTML/JS utilisant se basant sur des données JSON traitées et croisées pour afficher une liste de pokémons avec les informations liées (type, génération, stamina, attaque, défense et image). Avec des fonctionnalités de tri, filtres et recherche pour faciliter l'accès aux informations.",
        link: {link: "https://github.com/LucasGourmelon/Pokekemon/"},
        competences: {
            competence1: "Développement en HTML et JS natif. Création d'un système de filtrage et de tri à partir de données JSON pour simuler une API.",
            competence2: "Utilisation d'images de différents formats et différentes tailles en fonction du contexte pour avoir un temps de chargement optimal.",
            competence6: "Travail en duo dans le cadre du projet. Répartition des tâches et communication pour répartir les tâches en fonction des compétences de chacun.",
        },
        technos: {
            "HTML": FaHtml5,
            "CSS": FaCss3,
            "JS": FaJs,
            "JSON": FaFileCode
        }
    },
    {
        title: "Portail National EDF",
        images: [require("./assets/images/logo_edf_carre.png")],
        // description: "Participation au développement du nouveau portail national d’EDF puis chargé de MCO et de la maintenance évolutive du projet.",
        description: "Participation au développement du nouveau portail national d’EDF, de la conception jusqu'à la mise en production. Puis chargé de MCO et de la maintenance évolutive du projet. "+
                    "Fonctionnement en méthode agile et réunions de recueil des besoins récurents avec les clients et futurs utilisateurs.",
        link: "",
        competences: {
            competence1: "Conception, développement et test de fonctionnalités demandés par les clients (EDF). Correction de bugs. Modification de l'UX/UI de la section \"Annuaire\" (contacts, organigramme, annuaires personnalisés, etc) du site pour améliorer l'ergonomie.", 
            competence2: "Utilisation de la distance de Levenshtein pour améliorer la fonctionnalité de recherche globale de l'application. Développements ayant pour but de réduire le temps de chargement des pages (gestion de cache, gestion du poid des images, réduction du nombre de requêtes, etc.)", 
            competence3: "Utilisation d'un serveur Apache pour déployer et gérer des projets sur les environnements de développement, de recette et de production.",
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
        link: {link: "https://github.com/LucasGourmelon/AlgoGenetique"},
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
        link: {
            link: "https://www.figma.com/design/s2egM4u02x1AM2Q3hTlRbi/Bella-Italia?node-id=0-1&t=uRWLNv604VQsIbYR-1",
            icon: FaFigma
        },
        competences: {
            competence1: "Création de maquettes sur Figma pour proposer des interfaces claires et adaptées aux besoins du projet.",
            competence5: "Participation à des réunions avec les membres de l'entreprise pour comprendre leurs besoins et attentes.",
            competence6: "Travail en équipe de trois pour réaliser le projet, avec une répartition des tâches et une bonne communication.",
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