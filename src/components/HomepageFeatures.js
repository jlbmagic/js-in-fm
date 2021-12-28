import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "The Learning Path",
    Svg: require("../../static/img/learning.svg").default,
    description: (
      <>
        You don't need to know all of JavaScript to use the language in Claris
        FileMaker Pro. This learning path describes what you can learn first to
        do great things in your apps.
      </>
    ),
  },
  {
    title: "A Great Development Environment",
    Svg: require("../../static/img/development.svg").default,
    description: (
      <>
        Writing JS for FileMaker used to be challenging. Now, it's easy. This
        environment provides all you need to <strong>develop</strong> a widget,
        <strong> render</strong> it in FileMaker, and <strong>deploy</strong> it
        to your apps.
      </>
    ),
  },
  {
    title: "Awesome Examples & Support",
    Svg: require("../../static/img/community.svg").default,
    description: (
      <>
        These pages show a lot of great examples. Get involved in the
        <a href="https://community.jsinfm.com/home" target="_blank">
          community
        </a>
        and see even more and learn from each other.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--sm">
        <h3>{title}</h3>
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
