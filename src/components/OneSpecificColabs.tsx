import style from "./OneSpecificColabs.module.css";

const OneSpecificColabs = ({collab}: any) => {
  //console.log(collab);
  
  const sortAndGroupData = (data) => {    
    data.sort((a,b) => a.lastName.localeCompare(b.lastName))

    return data
  }


  sortAndGroupData(collab.collab)

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