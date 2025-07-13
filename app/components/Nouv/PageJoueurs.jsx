import React, { useState } from "react";
import TableauJoueurs from "./TableauJoueurs";
import styles from "../css/PageJoueurs.module.css";

export default function PageJoueurs({ joueurs }) {
    const [selectedJoueur, setSelectedJoueur] = useState(null);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.tableauContainer}>
                <TableauJoueurs joueurs={joueurs} onClickJoueur={setSelectedJoueur} />
            </div>

            <div className={styles.detailsContainer}>
                {selectedJoueur ? (
                    <div className={styles.detailsCard}>
                        <h2>Détails du joueur</h2>
                        <p><strong>Nom :</strong> {selectedJoueur.last_name}</p>
                        <p><strong>Prénom :</strong> {selectedJoueur.first_name}</p>
                        <p><strong>Âge :</strong> {selectedJoueur.age}</p>
                        <p><strong>Taille :</strong> {selectedJoueur.taille} cm</p>
                        <p><strong>Poids :</strong> {selectedJoueur.poids} kg</p>
                        <p><strong>Pied préféré :</strong> {selectedJoueur.pied}</p>
                    </div>
                ) : (
                    <p>Sélectionne un joueur pour voir les détails</p>
                )}
            </div>
        </div>
    );
}
