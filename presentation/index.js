// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  CodePane,
  Link
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  webserver: require('../assets/web-server.svg'),
  htmlLogo: require('../assets/CSS3_and_HTML5_logos_and_wordmarks.svg'),
  jsLogo: require('../assets/js.jpg'),
  pythonLogo: require('../assets/1024px-Python-logo-notext.svg.png'),
  djangoLogo: require('../assets/django-logo-negative.png'),
  reactLogo: require('../assets/React-logo-1.png')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#f6416c',
    tertiary: '#333',
    quaternary: '#CECECE',
    grayish: '#333'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide bgColor="secondary">
          <Heading textColor="white">Comment ça marche un site oueb</Heading>
        </Slide>
        <Slide>
          <Text>
            Les ordinateurs qui se connectent au Web sont appelés des clients et des serveurs.
          </Text>
          <Image src={images.webserver} />
        </Slide>
        <Slide>
          <Text>
            Les clients correspondent aux appareils des utilisateurs connectés sur internet, ici on parlera de nos navigateurs.
          </Text>
        </Slide>
        <Slide>
          <Text margin="1em 0 1em 0">
            Les serveurs sont des ordinateurs qui stockent des pages web des sites ou des applications.
          </Text>
          <Text>
            Lorsque le client souhaite accéder à une page une copie de la page est téléchargée depuis le server vers le client, la machine utilisée affiche alors le contenu dans le navigateur web de l’utilisateur.
          </Text>
        </Slide>
        <Slide>
          <Text>
            Qu'est ce qu'il se passe quand une adresse est saisie dans le navigateur !
          </Text>
        </Slide>
        <Slide>
          <Heading>Étape 1</Heading>
          <Text>
            Le navigateur demande au DNS l'adresse réelle du serveur contenant le site web.
          </Text>
          <Notes>
            <Heading>dns</Heading>
            Annuaire pour sites web. Lorsque vous saisissez une adresse dans le navigateur, ce dernier consulte le DNS pour trouver l'adresse réelle du site web avant de la récupérer. Le navigateur a besoin de savoir sur quel serveur le site web est situé pour pouvoir envoyer des requêtes HTTP au bon endroit.
          </Notes>
        </Slide>
        <Slide>
          <Heading>Étape 2</Heading>
          <Text>
            Le navigateur envoie une requête HTTP au serveur pour lui demander d'envoyer une copie du site web au client. Ce message, et les autres données envoyées entre le client et le serveur, sont échangés par l'intermédiaire de la connexion internet.
          </Text>
          <Notes>
            <Heading>http</Heading>
            Protocole de communication entre le serveur et le client
          </Notes>
        </Slide>
        <Slide>
          <Heading>Étape 3</Heading>
          <Text>
            Si le serveur accepte la requête émise par le client, le serveur envoie un message « 200 OK » au client qui signifie : « Pas de problème, tu peux consulter ce site web, le voici ». Ensuite le serveur commence à envoyer les fichiers du site web au navigateur.
          </Text>
          <Notes>
            <Heading>status code</Heading>
            Permet de déterminer le résultat d'une requête ou d'indiquer une erreur au client.
          </Notes>
        </Slide>
        <Slide>
          <Heading>Étape 4</Heading>
          <Text>
            Le navigateur affiche la page avec les informations reçu par le serveur.
          </Text>
        </Slide>
        <Slide>
          <Heading>Technologies utilisées chez Vroomly</Heading>
        </Slide>
        <Slide>
          <Heading>Frameworks</Heading>
          <Text>
            La guerre fait rage pour savoir si React est une lib ou un framework
          </Text>
        </Slide>
        <Slide>
          <Text>
            En programmation informatique, un framework (appelé aussi infrastructure logicielle, socle d'applications, infrastructure de développement, ou cadre d'applications4 au Canada) désigne un ensemble cohérent de composants logiciels structurels, qui sert à créer les fondations ainsi que les grandes lignes de tout ou d’une partie d'un logiciel (architecture).
          </Text>
        </Slide>
        <Slide>
          <Image src={images.reactLogo} width={500} />
          <Text>
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
          </Text>
        </Slide>
        <Slide>
          <Image src={images.djangoLogo} width={600}/>
          <Text>
            Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.
          </Text>
        </Slide>
        <Slide>
          <Heading>Language de programmation</Heading>
        </Slide>
        <Slide>
          <Image src={images.htmlLogo} width={500} />
        </Slide>
        <Slide>
          <Heading>HTML</Heading>
          <Link href="http://help.websiteos.com/websiteos/example_of_a_simple_html_page.htm">Exemple page HTML</Link>
        </Slide>
        <Slide>
          <Heading>CSS</Heading>
          <CodePane
            lang="scss"
            source={require('raw-loader!../assets/css.example')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide>
          <Image src={images.reactLogo} width={500} />
        </Slide>
        <Slide>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/jsx.example')}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
      </Deck>
    );
  }
}
