import Posts from "./components/Posts";
import Logo from "./components/Logo";
import './globals.css'

export default function Home() {
  return (
      
    
    <div className="px-6 mx-auto prose">
        <Logo/>
      <p className="mt-12 mb-12 text-3xl text-center">
      Hello and Welcome 👋&nbsp;
      <span className="whitespace-nowrap">
      {"I'm"} <span className="font-bold">Mohammed</span>
      </span>
    </p>
    <Posts/>
  </div>
  
  );
}
