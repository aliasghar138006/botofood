import MainPage from "../components/templates/MainPage";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_NAME); //defined
  console.log(process.env.BASE_URL); //undefined
  return (
    <MainPage />
  )
}
