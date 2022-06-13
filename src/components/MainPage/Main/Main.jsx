import React from 'react';
import Button from "../../../UI/Button/Button";
import classes from "./Main.module.css";


const Main = () => {
    return (
        <main className={classes.main}>
            <section className={classes.main__container}>
                <h1 className={classes.main__title}>
                    We will deliver your cargo exactly on time
                </h1>
                <p className={classes.main__content}>
                    For us, goods are our most valuable assets.
                    So that with certainty we can provide the best service for your goods
                </p>
                <Button text={'Get Started'} padding={'1.375rem 2.5rem'} fontSize={'0.75rem'}/>
            </section>
        </main>
    );
};

export default Main;