import Card from '../../components/Card';
import styles from '../../styles/Home.module.css'

export const getStaticProps = async()=>{
  const response = await fetch("http://api.mediastack.com/v1/news?access_key=065e850377c98e636d5d582a7817a12d");
  const data = await response.json();
  // console.log(data)
  return {
    props:{data}
  }
}

export default function Home({data}) {
  const modifiedData=data.data.filter((e)=>e.image)
  console.log(modifiedData)
  return (
    <div>
      <div className="flex justify-center font-extrabold text-2xl m-3">The Blog</div>
      <div  className={styles.cards}>
      {modifiedData.reverse().map((item)=>{
        return(
          <div key={item.author}>
            <Card item={item}/>
          </div>
        )
      })}
      </div>
    </div>
  )
}
