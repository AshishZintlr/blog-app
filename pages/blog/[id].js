import styles from "../../styles/Home.module.css"
import { useSelector } from 'react-redux';


// getStaticProps is used to define a list of paths generated Statically.
export async function getStaticPaths() {
  const response = await fetch(
    "http://api.mediastack.com/v1/news?access_key=065e850377c98e636d5d582a7817a12d"
  );
  const data = await response.json();

  const paths = data.data.map((item) => ({
    params: {
      id: item.title.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
// getStatic is used when we need pre-rendered page at build time.
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "http://api.mediastack.com/v1/news?access_key=065e850377c98e636d5d582a7817a12d"
  );
  const data = await response.json();

  let result = {};
  data.data.forEach((element) => {
    if (element.title == id) {
      return (result = {
        title: element.title,
        desc: element.description,
        image: element.image,
      });
    }
  });

  return {
    props: {
      result,
    },
  };
};

const Id = ({ result }) => {
  const mode = useSelector((state) => state.DarkModeReducer);
  return (
    <div className={`text-center p-3 flex justify-center items-center flex-col ${mode?styles.darkTheme:""} ${styles.home}`}>
      <img src={result.image} className="h-48 self-center" />
      <h1
        className="text-2xl fon
        t-bold m-3"
      >
        {result.title}
      </h1>
      <h2 className="text-xl font-semibold m-2">{result.desc}</h2>
    </div>
  );
};

export default Id;
