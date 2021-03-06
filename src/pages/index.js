import Head from 'next/Head';
import Link from 'next/Link';
import Layout from "../component/Layout";
import fs from 'fs';

const Home=({ slugs }) => (
   
<Layout>
<div>
    slugs:
   {slugs.map(slug => {
   return(
  <div key={slug}>  
    <Link href={"/course/"+slug}>
       <a>{"/course/"+slug}</a>
    </Link>
  </div>
  );
})}
</div>
</Layout>
);

 export const getStaticProps = async() =>
{
const files=fs.readdirSync("courses");
return{
  {props : {
     slugs : files.map(filename => filename.replace(".md",""))
    }

}
}
export default Home;
