import Button from "./button";
import ItemDescription from "./itemDescription";
import ImageItem from "./itemImage";
import ItemName from "./itemName";
import ItemPrice from "./ItemPrice";
import styles from './item.module.css'

export default function Item()
{
    return (
        <div className={styles.div}>
            <div>
                <ImageItem url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH62Q4ky9Ua3xdVbnYWTNQt5RWGmoLi43aFA&usqp=CAU"/>
                <ItemName title="Pepperoni Pizza"/>
            </div>
            <div>
                <ItemDescription desc="Premium pepperoni and cheese  is made with real mozzarrella on original hand-tossed crust."/>
            </div>
            <div>
            <Button title="Order"/>
            <ItemPrice price="$23.90" originalPrice="$829.90" />
                
                
            
            </div>
           
        </div>
    )
}