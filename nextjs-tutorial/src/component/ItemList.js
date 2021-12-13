import { Grid } from 'semantic-ui-react'
import styles from "./ItemList.module.css"
import Link from 'next/link'

export default function ItemList({list}) {
    return (
        <div>
            <Grid columns={3}>
                <Grid.Row>
                    {list.map((item)=>(
                        <Grid.Column key={item.id}>
                            <Link href="/view/[id]" as={`/view/${item.id}`}>  
                            {/* href 는 내가 보는 링크 as는 사용자가 보는 링크이다. */}
                                <a>
                                    <div className={styles.wrap}>
                                        <img 
                                        src={item.image_link} 
                                        alt={item.name} 
                                        className={styles.img_item}
                                        />
                                        <strong className={styles.tit_item}>{item.name}</strong>
                                        <span className={styles.txt_info}>
                                            {item.category} {item.priduct_type}
                                        </span>
                                        <strong className={styles.num_price}>${item.price}</strong>
                                    </div>
                                </a>
                            </Link>
                        </Grid.Column> 
                    ))}     
                </Grid.Row>
            </Grid>
        </div>
    );
}