import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Les projets',
        Svg: require('@site/static/img/coupe_de_robotique_black.svg').default,
        description: (
            <>
                Sur ce site, vous retrouverez la plupart des projets auquels nous nous intéressons (Coupe de France de Robotique,
                Cansat, Formula Student, etc).
            </>
        ),
    },
    {
        title: "L'association",
        Svg: require('@site/static/img/Officiel.svg').default,
        description: (
            <>
                Vous pourrez également y apprendre un peu plus sur nous, l'histoire de l'association et ce que nous y faisons au
                quotidien.
            </>
        ),
    },
    {
        title: 'Apprendre',
        Svg: require('@site/static/img/ENSEA_black.svg').default,
        description: (
            <>
                Mais l&apos;objectif principal de ce site web est de permettre aux adhérents et étudiants d'apprendre à faire
                de la robotique, de l'électronique et coder pour leurs propres projets !
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
