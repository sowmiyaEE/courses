import react from "react";
import fs from "fs";
import path from "path";
import Head from 'next/head';
import Link from 'next/link';
import Layout from "../components/Layout";
const Post=({cote}) => {
return <Layout><div>The contents: {cote}</div></Layout>;
};


export const getStaticPaths=async() => {
const files=fs.readdirSync("courses");
console.log("files",files);
const paths = files.map(filename => ({
 params : {  slug : filename.replace(".md","")}
}));
return {Paths,fallback: false};};

 export const getStaticProps =async({params:{slug}}) =>{
const cote=fs.readFileSync(path.join('courses',slug+'.md')).toString();

return {props: {cote}};
};

export default Post;
