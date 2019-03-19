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
  Layout,
  Fit,
  Fill,
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
            Le navigateur demande au DNS l'adresse réelle du serveur contenant le site web (vous trouvez l'adresse du magasin).
          </Text>
        </Slide>
        <Slide>
          <Heading>Étape 2</Heading>
          <Text>
            Le navigateur envoie une requête HTTP au serveur pour lui demander d'envoyer une copie du site web au client. Ce message, et les autres données envoyées entre le client et le serveur, sont échangés par l'intermédiaire de la connexion internet.
          </Text>
        </Slide>
        <Slide>
          <Heading>Étape 3</Heading>
          <Text>
            Si le serveur accepte la requête émise par le client, le serveur envoie un message « 200 OK » au client qui signifie : « Pas de problème, tu peux consulter ce site web, le voici ». Ensuite le serveur commence à envoyer les fichiers du site web au navigateur.
          </Text>
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
          <Text>C'est quoi un framework</Text>
        </Slide>
        <Slide>
          <Image src={images.reactLogo} width={500} />
          <Text>Bref description</Text>
        </Slide>
        <Slide>
          <Image src={images.djangoLogo} width={600}/>
          <Text>Bref description</Text>
        </Slide>
        <Slide>
          <Heading>Language de programmation</Heading>
        </Slide>
        <Slide>
          <Image src={images.htmlLogo} width={500} />
          <Text>Code sample</Text>
        </Slide>
        <Slide>
          <Image src={images.jsLogo} width={500} />
          <Text>Code sample</Text>
        </Slide>
      </Deck>
    );
  }
}
