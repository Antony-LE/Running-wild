/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import './cgu.css';
import { NavLink } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

// Import of axios
import axios from '../../api/axios';

// Endpoint for logging out
const LOGOUT_URL = '/user/logout';

// logged in variable
const isLoggedIn = localStorage.getItem('id');

function Cgu() {
  // handle wether the user is logged in or not
  const [logout, setLogout] = useState(false);
  // handle wether the user has succefully logged in or not
  const [isLogged, setIsLogged] = useState(false);
  // Handle the form submission
  const handleLogoutClick = async (e) => {
    const response = await axios.get(LOGOUT_URL);
    setLogout(true);
    setIsLogged(response.data.result);
    // Clear out all the user's data when disconnect
    window.localStorage.clear();
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          {logout ? (
            <section className="runningwild__logout-success gradient__bg">
              <h1>
                Vous êtes déconnecté !
              </h1>
              <p>
                <NavLink to="/">
                  Me connecter
                </NavLink>
              </p>
            </section>
          ) : (
            <div className="runningwild__cgu-container">
              <header className="runningwild__cgu-header">
                <Navbar />
                <button className="runningwild__logout-button" type="button" onClick={handleLogoutClick}>Se déconnecter</button>
                <NavLink to="/profile">
                  <button className="runningwild__profile-button" type="button">Mon profil</button>
                </NavLink>
              </header>
              <main className="runningwild__cgu-main">
                <div className="runningwild__cgu-main-text">
                  <h1>
                    Conditions générales d&apos;utilisation
                    du site Running-Wild
                  </h1>
                  <ul>
                    <li>
                      <h2>ARTICLE 1 : Objet</h2>
                      <p>
                        Les présentes « conditions générales d&apos;utilisation » ont pour objet l&apos;encadrement juridique de
                        l’utilisation du site https://running-wild-e6097.web.app/ et de ses services.
                        Ce contrat est conclu entre :
                        Le gérant du site internet, ci-après désigné « l’Éditeur »,
                        Toute personne physique ou morale souhaitant accéder au site et à ses services, ci-après appelé
                        « l’Utilisateur ».
                        Les conditions générales d&apos;utilisation doivent être acceptées par tout Utilisateur, et son accès au
                        site vaut acceptation de ces conditions
                      </p>
                    </li>
                    <br />
                    <li>
                      <h2>ARTICLE 2 : Mentions légales</h2>
                      <p>
                        Pour les personnes morales :
                        Le site Running-Wild est édité par la société Running-Wild, Association au capital de 0€, dont le
                        siège social est situé à Paris
                        La société est représentée par Le Antony - Klichowski Frédéric - Audic Killian - Finnan Daniel
                        Pour les personnes physiques :
                        Le site Running-Wild est édité par Le Antony - Klichowski Frédéric - Audic Killian - Finnan Daniel,
                        domicilié à Paris
                      </p>
                    </li>
                    <br />
                    <li>
                      <h2>ARTICLE 3: accès aux services</h2>
                      <p>
                        L’Utilisateur du site Running-Wild a accès aux services suivants :
                        • [Service n°1] = Création d’un profil utilisateur
                        • [Service n°2] = Connexion au service
                        Tout Utilisateur ayant accès à internet peut accéder gratuitement et depuis n’importe où au site.
                        Les frais supportés par l’Utilisateur pour y accéder (connexion internet, matériel informatique, etc.)
                        ne sont pas à la charge de l’Éditeur.
                        Les services suivants ne sont pas accessibles pour l’Utilisateur que s’il est membre du site (c’est-
                        à-dire que s’il est identifié à l’aide de ses identifiants de connexion) :
                        • Consultation de son profil
                        • Utilisation du service
                        • ...
                        Le site et ses différents services peuvent être interrompus ou suspendus par l’Éditeur, notamment
                        à l’occasion d’une maintenance, sans obligation de préavis ou de justification.
                      </p>
                    </li>
                    <br />
                    <li>
                      <h2>ARTICLE 4: Responsabilité de l’Utilisateur</h2>
                      <p>
                        L&apos;Utilisateur est responsable des risques liés à l’utilisation de son identifiant de connexion et de
                        son mot de passe.
                        Le mot de passe de l’Utilisateur doit rester secret. En cas de divulgation de mot de passe, l’Éditeur
                        décline toute responsabilité.
                        L’Utilisateur assume l’entière responsabilité de l’utilisation qu’il fait des informations et contenus
                        présents sur le site Running-Wild
                        Tout usage du service par l&apos;Utilisateur ayant directement ou indirectement pour conséquence des
                        dommages doit faire l&apos;objet d&apos;une indemnisation au profit du site.
                        Le site permet aux membres de publier sur le site :
                        • Like d’un parcours
                        Le membre s’engage à tenir des propos respectueux des autres et de la loi et accepte que ces
                        publications soient modérées ou refusées par l’Éditeur, sans obligation de justification.
                        En publiant sur le site, l’Utilisateur cède à la société éditrice le droit non exclusif et gratuit de
                        représenter, reproduire, adapter, modifier, diffuser et distribuer sa publication, directement ou par
                        un tiers autorisé.
                        L’Éditeur s&apos;engage toutefois à citer le membre en cas d’utilisation de sa publication

                      </p>
                    </li>
                    <br />
                    <li>
                      <h2>ARTICLE 5 : Responsabilité de l’Éditeur</h2>
                      <p>
                        Tout dysfonctionnement du serveur ou du réseau ne peut engager la responsabilité de l’Éditeur.
                        De même, la responsabilité du site ne peut être engagée en cas de force majeure ou du fait
                        imprévisible et insurmontable d&apos;un tiers.
                        Le site Running-Wild s&apos;engage à mettre en œuvre tous les moyens nécessaires pour garantir la
                        sécurité et la confidentialité des données. Toutefois, il n’apporte pas une garantie de sécurité
                        totale.
                        L’Éditeur se réserve la faculté d’une non-garantie de la fiabilité des sources, bien que les
                        informations diffusées sur le site soient réputées fiables.
                      </p>
                    </li>
                    <br />
                    <li>
                      <h2>ARTICLE 6: Propriété intellectuelle</h2>
                      <p>
                        Les contenus du site Running-Wild (logos, textes, éléments graphiques, vidéos, etc.) sont protégés
                        par le droit d’auteur, en vertu du Code de la propriété intellectuelle.
                        L’Utilisateur devra obtenir l’autorisation de l’éditeur du site avant toute reproduction, copie ou
                        publication de ces différents contenus.
                        Ces derniers peuvent être utilisés par les utilisateurs à des fins privées ; tout usage commercial est
                        interdit.
                        L’Utilisateur est entièrement responsable de tout contenu qu’il met en ligne et il s’engage à ne pas
                        porter atteinte à un tiers.
                        L’Éditeur du site se réserve le droit de modérer ou de supprimer librement et à tout moment les
                        contenus mis en ligne par les utilisateurs, et ce sans justification.
                      </p>
                    </li>
                    <br />
                    <li>
                      <h2>ARTICLE 7: Données personnelles</h2>
                      <p>
                        L’Utilisateur doit obligatoirement fournir des informations personnelles pour procéder à son
                        inscription sur le site.
                        L’adresse électronique (e-mail) de l’utilisateur pourra notamment être utilisée par le site Running-
                        Wild pour la communication d’informations diverses et la gestion du compte.
                        Running-Wild garantie le respect de la vie privée de l’utilisateur, conformément à la loi n°78-17 du
                        6 janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés.
                        Le site est déclaré auprès de la CNIL sous le numéro suivant : [12345].
                        En vertu des articles 39 et 40 de la loi en date du 6 janvier 1978, l&apos;Utilisateur dispose d&apos;un droit
                        d&apos;accès, de rectification, de suppression et d&apos;opposition de ses données personnelles. L&apos;Utilisateur
                        exerce ce droit via :
                        • Son espace personnel sur le site ;
                        • Un formulaire de contact ;
                        • Par mail à Running-Wild@gmail.com ;
                        • Par voie postale à Paris].
                      </p>
                    </li>
                    <br />
                    <li>
                      <h2>ARTICLE 8 : Liens hypertextes</h2>
                      <p>
                        Les domaines vers lesquels mènent les liens hypertextes présents sur le site n’engagent pas la
                        responsabilité de l’Éditeur de Running-Wild qui n’a pas de contrôle sur ces liens.
                        Il est possible pour un tiers de créer un lien vers une page du site Running-Wild sans autorisation
                        expresse de l’éditeur.
                      </p>
                    </li>
                    <br />
                    <li>
                      <h2>
                        ARTICLE 9 : Évolution des conditions générales
                        d’utilisation
                      </h2>
                      <p>
                        Le site Running-Wild se réserve le droit de modifier les clauses de ces conditions générales
                        d’utilisation à tout moment et sans justification.
                      </p>
                    </li>
                    <br />
                    <li>
                      <h2>
                        ARTICLE 10 : Durée du contrat
                      </h2>
                      <p>
                        La durée du présent contrat est indéterminée. Le contrat produit ses effets à l&apos;égard de l&apos;Utilisateur
                        à compter du début de l’utilisation du service.
                      </p>
                    </li>
                    <br />
                    <li>
                      <h2>
                        ARTICLE 11 : Droit applicable et juridiction
                        compétente
                      </h2>
                      <p>
                        Le présent contrat dépend de la législation française.
                        En cas de litige non résolu à l’amiable entre l’Utilisateur et l’Éditeur, les tribunaux de Paris sont
                        compétents pour régler le contentieux.
                      </p>
                    </li>
                  </ul>
                </div>
              </main>
              <Footer />
            </div>
          )}
        </>
      ) : (
        <div className="forbidden">
          <div className="forbidden-text">
            <h2>Veuillez d&apos;abord vous connecter à votre compte !</h2>
            <p>
              <NavLink to="/">
                Me connecter
              </NavLink>
            </p>
          </div>
        </div>
      )}

    </>
  );
}
export default Cgu;
