import style from './Description.module.css';

function Description({info}) {
    return (
        <h2 className={style.mb3}>
            {info.title}, {info.description}
        </h2>
    );
}

export default Description;

