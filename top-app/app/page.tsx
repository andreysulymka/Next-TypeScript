import Button from "./components/Button/Button";
import Htag from "./components/Htag/Htag";
import Ptag from "./components/Ptag/Ptag";
import Rating from "./components/Rating/Rating";
import Tag from "./components/Tag/Tag";




export default function Home() {

  return (
    <>
      <Htag tag='h2'>Text</Htag>
      <Button appearance="primary">Текст</Button>  
      <Button appearance="ghost" arrow="down" >Текст</Button>  
      <Ptag>lkljkljklj</Ptag>
      <Tag>hhjgj</Tag>
      <Tag height="l" color='red'>hhjgj</Tag>
      <Tag color='green'>hhjgj</Tag>
      <Tag color='primary'>hhjgj</Tag>
      <Tag href="string">hhjgj</Tag>
      <Rating rating={4} isEditable={true} />
    </>
  )
}
