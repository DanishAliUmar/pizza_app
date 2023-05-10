import React from 'react'
import styles from "../styles/PizzaList.module.css";
import PizzaCard from './PizzaCard';

function PizzaList({pizzaList}) {
  return (
 <div className={styles.container}>
    <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
    <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure distinctio ipsa quam fugiat, nobis totam commodi cumque reprehenderit inventore facere est provident sint aperiam dicta voluptatum doloremque doloribus sunt.
    </p>
    <div className={styles.wrapper}>
      {pizzaList.map((pizza)=>(
        <PizzaCard key={pizza._id} pizza={pizza} />
      ))}
    </div>
 </div> 
  )
}

export default PizzaList







// import React from 'react'
// import styles from "../styles/PizzaList.module.css";
// import PizzaCard from './PizzaCard';

// function PizzaList({PizzaList}) {
//   return (
//  <div className={styles.container}>
//     <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
//     <p className={styles.desc}>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure distinctio ipsa quam fugiat, nobis totam commodi cumque reprehenderit inventore facere est provident sint aperiam dicta voluptatum doloremque doloribus sunt.
//     </p>
//     <div className={styles.wrapper}>
//         {PizzaList.map((pizza)=>(
//         <PizzaCard key={pizza._id} pizza={pizza}/>
//         ))}
//     </div>
//  </div> 
//   )
// }

// export default PizzaList
