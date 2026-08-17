import { useState } from "react"

function App() {
  const [Open,setOpen] = useState(false);
  const [theme,setTheme] = useState("light");
  return (
    <div className={`${theme} min-h-screen dark:bg-slate-900 dark:text-white`}>
    {/* Navbar */}
    <div className="flex items-center justify-between h-12 px-4 dark:bg-background">
      <div className="font-bold ">
        Login
      </div>

    {/* Desktop */}
      <div className="hidden sm:flex gap-2">
        <button className="text-xl cursor-pointer"
          onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    
    <button className="text-xl cursor-pointer sm:hidden hover:scale-105 transition-all duration-900" 
    onClick={()=>setOpen(!Open)}>☰</button>

    </div>
    {/* Mobile */}
      {Open && (<div className="flex flex-col items-center gap-2 dark:bg-slate-900 dark:text-white p-4 sm:hidden">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>

        <button className="text-xl cursor-pointer sm:hidden"
          onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? "🌙" : "☀️"}
        </button>
       
      </div>
      )}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 dark:bg-slate-900 dark:text-white text-white p-6 gap-6 text-center text-2xl sm:text-sm">
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-110 transition-all duration-600">Feature One</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-110">Feature Two</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Three</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Four</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Five</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-600">Feature Six</div>
    </div>

    </div>
  )
}

export default App
