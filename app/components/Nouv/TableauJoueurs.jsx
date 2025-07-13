import React from "react";
import styles from "../css/TableauJoueurs.module.css"; // Le CSS (voir plus bas)

export default function TableauJoueurs({ joueurs, onClickJoueur,h1 }) {
    return (
        <div className={styles.tableau}>
            {h1}

            {joueurs.map((joueur) => (
                <div
                    key={joueur.id}
                    className={styles.carte}
                    onClick={() => onClickJoueur(joueur)}
                >
                    <img
                        src={`http://localhost/TMAapp/src/backend/${joueur.picture}`}
                        alt={`${joueur.prenom} ${joueur.nom}`}
                        className={styles.image}
                    />

                    <div className={styles.nom}>
                        {joueur.first_name} {joueur.last_name}<br/>
                        Age: {joueur.age}
                    </div>
                </div>
            ))}
        </div>
    );
}
