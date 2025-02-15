import styles from './empty-card.module.css';

export const EmptyCard = ({
    children,
    className = '',
    title = null,
    color = 'primary',
    options = {
        menu: null,
    },
    overflow = 'hidden',
}) => {
    const backgroundColor = {
        primary: styles.primary,
        secondary: styles.secondary,
        accent: styles.accent,
    }[color];

    let TitleItem = null;

    if (title || options.menu) {
        TitleItem = (
            <header className={styles.header}>
                {title && <h5>{title}</h5>}
                {options.menu && typeof options.menu === 'string' ? (
                    <span>{options.menu}</span>
                ) : (
                    options.menu
                )}
            </header>
        );
    }

    const overflowClass = overflow === 'visible' ? styles.overflowVisible : '';
    
    return (
        <section className={`${styles.customBlock} ${backgroundColor} ${overflowClass} ${className}`}>
            {TitleItem}

            {children && <article className={styles.content}>{children}</article>}
        </section>
    );
};
