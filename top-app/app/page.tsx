import Button from "./components/Button/Button";
import Htag from "./components/Htag/Htag";


export default function Home() {
  return (
    <>
      <Htag tag='h2'>Текст</Htag>
      <Button appearance="primary">Текст</Button>  
      <Button appearance="ghost">Текст</Button>     
    </>
  )
}
