import Button from "./components/Button/Button";
import Htag from "./components/Htag/Htag";
import Ptag from "./components/Ptag/Ptag";



export default function Home() {
  return (
    <>
      <Htag tag='h2'>Текст</Htag>
      <Button appearance="primary">Текст</Button>  
      <Button appearance="ghost" arrow="down">Текст</Button>  
      <Ptag>lkljkljklj</Ptag>
    </>
  )
}
