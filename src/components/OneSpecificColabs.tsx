import style from "./OneSpecificColabs.module.css";

const OneSpecificColabs = ({collab}: any) => {
  
  return (
    <div className={style.wrapper}>
      {collab.collab.map((item) => {
        return (
          <div key={item.id} className={style.container}>
            <p>{item.name}</p>
            <p>{item.lastName}</p>
          </div>
        )
      })}
    </div>
  )
}

export default OneSpecificColabs