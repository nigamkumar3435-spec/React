import styles from"./Item.module.css";
const Item = (props) => {

    return (
    <li className={`${styles.KgItem}  list-group-item`} ><span className="kg-span">{props.foodItem}</span>
    </li>
);
};
export default Item;