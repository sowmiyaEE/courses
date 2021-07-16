//index.tsx
import Head from 'next/Head';
import Link from 'next/Link';
import Layout from "../component/Layout";
import fs from 'fs';

const Home=({ slugs }) => (
     return(
<Layout>
<div>
    slugs:
   {slugs.map(slug => {
 
  <div key={slug}>  
    <Link href={slug}>
       <a>{slug}</a>
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
